const { CrawlingAPI } = require('crawlbase'),
	fs = require('fs'), // Import the 'fs' module
	api = new CrawlingAPI({ token: 'CRAWLBASE_JS_TOKEN' }), // Replace it with your JS Request token
	amazonReviewsURL =
		'https://www.amazon.com/Meta-Quest-Pro-Oculus/product-reviews/B09Z7KGTVW/?reviewerType=all_reviews';

async function fetchReviews(url, reviews = []) {
	try {
		const response = await api.get(url, {
			scraper: 'amazon-product-reviews',
			ajax_wait: true,
			page_wait: 3000,
		});

		// Checking if the response status is 200
		if (response.statusCode === 200) {
			const data = response.json.body;

			// Checking if the pagination number exists in the response
			const nextPageNumber = data.pagination.nextPage;

			console.log(reviews.length, 'Response Reviews');

			if (nextPageNumber) {
				// Call the function recursively with the next page URL
				const nextPageUrl = `${amazonReviewsURL}&pageNumber=${nextPageNumber}`;
				return fetchReviews(nextPageUrl, reviews.concat(data.reviews));
			} else {
				console.log('Reached the last page.', reviews.length);
				return reviews.concat(data.reviews);
			}
		} else {
			// Handle empty data response
			throw new Error(`API request failed with status: ${response.statusCode}`);
		}
	} catch (error) {
		console.log(`API call failed fetching again URL: ${url}`);

		// Retry the API call with the same URL
		return fetchReviews(url, reviews);
	}
}

async function fetchAllReviews() {
	try {
		const reviews = await fetchReviews(amazonReviewsURL);
		console.log('Total Reviews:', reviews.length);
		fs.writeFileSync('amazon_reviews.json', JSON.stringify({ reviews }, null, 2));
	} catch (error) {
		console.error(`Recursive API calls failed: ${error}`);
	}
}

// Start the recursive API calls to fetch Amazon Product Reviews
fetchAllReviews();
