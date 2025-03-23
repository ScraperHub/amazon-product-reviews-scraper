# amazon-product-reviews-scraper

## Description

This repository contains a Node.js-based scraper for extracting Amazon product reviews. The scraper utilizes the [Crawlbase Crawling API](https://crawlbase.com/crawling-api-avoid-captchas-blocks) with the Amazon Product Reviews scraper, ensuring smooth and accurate data extraction while handling pagination automatically.

➡ Read the full blog [here](https://crawlbase.com/blog/how-to-scrape-amazon-reviews/) to learn more.

## Scraper Overview

The `amazon_reviews_scraper.js` extracts detailed Amazon product reviews, including:

- **Review ID**
- **Reviewer Name & Profile Link**
- **Review Title & Text**
- **Rating (Stars)**
- **Review Date**
- **Review Attributes (Size, Color, Product Grade, etc.)**
- **Helpful Votes Count**
- **Verified Purchase Status**
- **Review Comments Count**
- **Review Link**
- **Media (Images & Videos)**
- **Pagination Handling (Automatically Fetches Multiple Pages)**

The scraper recursively fetches reviews across multiple pages and saves the extracted data in a JSON file.

## Environment Setup

Ensure Node.js is installed on your system. Check the version using:

```bash
node -v
```

Install the required dependency:

```bash
npm install crawlbase
```

## Running the Scraper

### 1. Get Your Crawlbase Access Token

- Sign up on [Crawlbase](https://crawlbase.com/signup) to get an API token.
- This token is required to access the Crawling API for bypassing Amazon’s anti-bot protection.

### 2. Update the Scraper with Your Token

Replace "`CRAWLBASE_JS_TOKEN`" in the script with your Crawlbase Crawling API Token.

### 3. Run the Scraper

```bash
node amazon_reviews_scraper.js
```

The extracted Amazon product reviews will be saved in a JSON file named `amazon_reviews.json`.
