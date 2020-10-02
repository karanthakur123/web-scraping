title=$('div[class="title_wrapper"] >h1').text().trim();
rating=$('div[class="ratingValue"]>strong>span').text();
summary=$('div[class="summary_text"]').text().trim();
releaseData=$('a[title="See more release dates"]').text().trim();

title=$('div[class="a-section a-spacing-none"] >h1[class="a-size-large a-spacing-none"]>span[class="a-size-large product-title-word-break"]').text().trim();


title2=$('div[class="a-section a-spacing-none"] >h1[class="a-size-large a-spacing-none"]>span[class="a-size-large product-title-word-break"]').textContent.trim();
rating=$('span[class="a-declarative"]>a[class="a-link-normal"]>span[class="a-size-base"]').textContent.trim();
unavailability=$('div[ class="a-box"]>div[  class="a-box-inner"]>div[class="a-section a-spacing-small a-text-center"]>span[class="a-color-price a-text-bold"]').textContent.trim();