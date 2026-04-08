## Overview

This guide documents the process of rebuilding the Winteriors website from scratch, section by section. The goal of this first pass is to produce an accurate desktop reproduction of the current site. Mobile responsiveness will handled separately once the desktop layout is complete and stable.

The approach is incremental. Each step adds one piece of the page, with the HTML and CSS growing together. Every step shows the full updated HTML for its section so you can follow along without losing context.

## Project Structure

Before writing any code, set up the following files and folders in your project directory:

```
winteriors/
├── index.html
├── fontawesome/
│   └── css/
│       └── all.min.css
├── font/
│   ├── Winteriors.woff2
│   └── Winteriors.woff
├── logo-white.png
└── hero-1024x768.jpeg
```

You can download the files from this link: [Initial Project Files]()
<!-- TODO: Add link to initial project files-->

Font Awesome provides the icons used in the website. The Winteriors font is a custom display fon used exclusively fo rthe brand name. Both are loaded via the `<head>` of `index.html`.

## Base HTML Shell

Start with a blank `index.html`. This is the skeleton that everything else will be added into. The `<link>` tag loads Font Awesome. The `<style>` block inside `<head>` is where all CSS will live.

Add the following to `index.html`:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="fontawesome/css/all.min.css">
    <title>Winteriors - Beautiful Sofas Zambia</title>
    <style>
        /* CSS goes here */
    </style>
</head>
<body>
    <!-- HTML goes here -->
</body>
</html>
```

## CSS Reset

The reset comes first inside the `<style>` block, before any custom styles. Its job is to strip out the inconsistent default styles that different browsers apply, so everything starts from a clean, predictable baselin.

```html
<style>
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        -webkit-text-size-adjust: 100%;
    }

    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }

    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }

    input, button, textarea, select {
        font: inherit;
    }

    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }

    #root, #__next {
        isolation: isolate;
    }
</style>
```

A few things worth noting here. `box-sizing: border-box` is applied universally. This makes width and height calculations include padding and border, which is almost always what you want. `img {display: block}` removes the small gap that appears below inline images. `font: inherit` on form elements stops browsers from overriding the page font inside inputs and buttons.

## CSS Custom Properties

Directly after the reset, define the CSS variables. These sit on `:root` so they are accessible anywhere on the page. The idea is that any colour used more than once in the design lives here as a variable. This makes future design changes a one-line edit rather than a find-and-replace across the whole stylesheet.

```css
:root {
    --text: #292929;
    --bg: #FFFFFF;
    --bg-subtle: #F5F5F5;
    --border: #EAEAEA;
    --accent: #D1BC92; /* warm gold */
}
```

There is also an `.inverted` class that flips `--text` and `--bg`. This is used by the top bar to achieve its dark background without writing a separate set of colour rules. Any element that needs the inverted dark theme just receives this class.

```css
.inverted {
    --text: #FFFFFF;
    --bg: #292929;
}
```

## Custom Font

The Winteriors font is loaded via `@font-face` and used only for the brand name in the header. Two formats are provided - `woff2` for modern browsers and `woff` as a fallback. The CSS declaration: `font-display: swap` ensures the text remains visible using a system font while the custom font loads, rather than hiding it.

```css
@font-face {
    font-family: 'Winteriors';
    src: url('font/Winteriors.woff2') format('woff2'),
         url('font/Winteriors.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
```

## Body Defaults

Set the default styles on `body`. The font stack uses system fonts for now - `Segoe UI` first, with fallbacks. This keeps load times fast and body text readable. The Winteriors display font is intentionally not used here; it is only applied to the brand name `<h1>` in the header.

```css
body {
    margin: 0 auto;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: var(--text);
    background: var(--bg);
}
```

With the reset, variables, font, and body defaults in place the stylesheet is ready. The `index.html` at this point should render as a completely blank whit page with no visible content. That is the correct starting poing before adding sections.

## Add Top Bar

### Top Bar Wrapper

The top bar is the first element on the page. It sits above the header and contains the company email on the left and social media links on the right. The wrapper fills the full width of the viewport. It uses the `.inverted` class which flips the CSS variables so that `--bg` becomes `#292929` (dark) and `--text` becomes `#FFFFFF` (white).

```html
<div class="topbar-wrapper inverted">
</div>
```

```css
.topbar-wrapper {
    color: var(--text);
    background: var(--bg);
}
```

No extra CSS is needed for the inverted dark background. The `.inverted` class is already defined in the base setup.

### Top Bar Inner Container

The inner `.topbar` div is what constrains the content to 1140px and centres it. It is 36px tall which is small. This is what you expect for a top bar. It uses flexbox to layout the content in a horizontal manner. The CSS declaration `justify-content: space-between` is used to push the email to the left and the socials to the right.

Here is the HTML:
```html
<div class="topbar-wrapper inverted">
    <div class="topbar">
    </div>
</div>
```

Here is the CSS:
```css
.topbar {
    max-width: 1140px;
    margin: 0 auto;
    height: 36px;
    display: flex;
    justify-content: space-between;
    padding: 0 8px;
}
```

### Email

The email address sits on the left side of the top bar. It uses a Font Awesome envelope icon followed by the email text. Both are wrapped in a flex row with a small gap between them. Font size is kept small at 14px to match the slim height of the bar.

```html
<div class="topbar-wrapper inverted">
    <div class="topbar">
        <div class="email">
            <i class="fa-solid fa-envelope"></i>
            <div>hello@winteriorz.com</div>
        </div>
    </div>
</div>
```

```css
.topbar .email {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 14px;
    line-height: 1;}

<!-- ## Categories section problems -->

## Add Categories section

### Categories Wrapper

In this step we will add the Categories Section. The Categories section will include a `categories-wrapper` div. This div is supposed to fill the full width of the view. It will have a background color of `#FFFFFF`.

Here is the HTML:
```html
<div class="categories-wrapper"></div>
```

Here is the corresponding CSS:
```css
.categories-wrapper {
    background: var(--bg); /*#FFFFFF */
}
```

### Categories Grid

Next comes the `categories` div. This div is nested inside the `categories-wrapper`. It has a maximum width of 1140px with the content centred. The bottom and top padding will be 60px while the left and right padding will be 8px. The value of the left and right padding can be changed based on visual feedback and other design needs like mobile responsiveness. The `categories` section will essentially contain category cards so the structure to implement this will be a grid. The grid layout will be 1 row with 4 columns, with each column representing a category card.

Here is the updated HTML:
```html
<div class="categories-wrapper">
    <div class="categories">
    </div>
</div>
```

Here is the corresponding CSS:
```css
.categories-wrapper {
    background: var(--bg);
}

.categories {
    max-width: 1140px;
    margin: 0 auto;
    padding: 60px 8px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
}
```

### Category Card

The Category Card `div` with the class name: `category-card` will fall under the `categories` grid. Each card is a link, so an anchor `a` tag will be used as a container for the card. This means that clicking anywhere on the card will take you to the corresponding link.

The Category Card will have the following information. The tag of the category, e.g. "New Arrivals" which will use a `span` tag and a class name of `tag`. Next comes the name of the category which will use an `h3` tag. Still debating on whether to use an h3 tag or an h2 tag, as the preceding `h2` tag is for a previous section. Will look over this again. Last is the Call To Action "Shop Now" which will use a `span` tag.

With regards to the styling we will start with the `category-card` itself. It will use a background color of `--bg-subtle` or `#F5F5F5` to differentiate itself from the `categories` wrapper background which uses `#FFFFFF`. Each text item are organized in a column. The color for the text will be `#292929` or `--text`. There is transition of 0.2s for the background, this is in anticapation of the hover state added in the next step.

Here is the updated HTML:
```html
<div class="categories-wrapper">
    <div class="categories">
        <a class="categories">
            <span class="tag">New Arrivals</span>
            <h3>Furniture</h3>
            <span class="shop-link">Shop Now</span>
        </a>
    </div>
</div>
```

Here is the corresponding CSS:
```css
.categories-wrapper {
    background: var(--bg); /* #FFFFFF */
}

.categories {
    max-width: 1140px;
    margin: 0 auto;
    padding: 60px 8px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
}

.category-card {
    background: var(--bg-subtle); /* #F5F5F5 */
    padding: 24px 20px 20px 20px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-decoration: none;
    color: var(--text); /* #292929 */
    transition: background 0.2s;
}
```

Values of category card from original:

```css
.category {
    padding: 30px;
    gap: 30px;
}

.category-card {
    padding: 30px;
}
```

### Category Card Hover

When a user hovers over a card, the background darkens slightly to `#EDEAE4` — a warm off-white that sits between `--bg-subtle` and the card's natural beige tones. This gives a subtle interactive feel without being too heavy.

```css
.category-card:hover {
    background: #EDEAE4;
}
```

### Category Card - Tag

The `tag` span is the first item inside the card. It is styled in a small uppercase label style using the brand's gold accent colour `#D1BC92`. The intent is to communicate the promotional label (e.g. "Sale", "New Arrivals") at a glance before the eye reaches the category name below it.

It is in uppercase and the font size is 11px. This maybe adjusted based on visual feedback. It also has a letter spacing of 1.5px which maybe adjusted based on visual feedback as well.

```css
.category-card .tag {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--accent); /* #D1BC92 */
    font-weight: 600;
}
```

### Category Card - Name

The heading `h3` for the category name is bold and uppercase, slightly larger than the tag above it. The bottom margin creates a small gap between the name and the "Shop Now" link below.

The font size is 15px which may later on be adjusted based on visual feedback. The same could be said for the other rules like the font weight and the letter spacing.

```css
.category-card h3 {
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
    margin-bottom: 0.5rem;
}
```

### Category Card - Shop Now Link

The `shop-link` span mimics a text link. Rather than using an actual arrow character in the HTML, a CSS `::after` pseudo-element injects the `→` arrow. This keeps the HTML clean and makes it easy to swap the arrow style later from one place in the CSS.

The font size is 11px. Judgement based on visual feedback maybe used to adjust the values. The same could be said for the other rules like letter-spacing and the gap.

```css
.category-card .shop-link {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    gap: 4px;
}

.category-card .shop-link::after {
    content: '→';
}
```

### All Four Cards

Now that one card is styled, replicate it three more times inside `.categories` for the remaining categories. The grid will automatically place them across four columns.

```html
<div class="categories-wrapper">
    <div class="categories">
        <a class="category-card" href="#">
            <span class="tag">New Arrivals</span>
            <h3>Furniture</h3>
            <span class="shop-link">Shop Now</span>
        </a>
        <a class="category-card" href="#">
            <span class="tag">Discount</span>
            <h3>Living Room</h3>
            <span class="shop-link">Shop Now</span>
        </a>
        <a class="category-card" href="#">
            <span class="tag">Sale</span>
            <h3>Bedroom</h3>
            <span class="shop-link">Shop Now</span>
        </a>
        <a class="category-card" href="#">
            <span class="tag">Sale</span>
            <h3>Hotel</h3>
            <span class="shop-link">Shop Now</span>
        </a>
    </div>
</div>
```

No new CSS needed — all four cards share the same `.category-card` styles already written.

### Categories: Post Visual Feedback

After visual feedback, here is the updated CSS for the Categories section:

```css
/* Categories Section */
         .categories-wrapper {
            background: var(--bg);
         }

         .categories {
            max-width: 1140px;
            margin: 30px auto 90px auto;
            padding: 30px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 30px;
         }

         .category-card {
            background: var(--bg-subtle);
            padding: 30px;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            text-decoration: none;
            color: var(--text);
            transition: background 0.2s;
         }

         .category-card:hover {
            background: #EDEAE4;
            font-weight: bolder;
         }

         .category-card .tag {
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            color: var(--accent); /* #D1BC92 */
            font-weight: 500;
         }

         .category-card h3 {
             font-size: 18px;
             text-transform: uppercase;
             letter-spacing: 1px;
             font-weight: 700;
             margin-bottom: 0.5rem;
         }

         .category-card .shop-link {
             font-size: 12px;
             text-transform: uppercase;
             letter-spacing: 1px;
             display: flex;
             align-items: center;
             gap: 4px;
         }

         .category-card .shop-link::after {
            content: '→';
         }
```

## Add Best Selling Section

### Section Heading Pattern

Before building the grid, a reusable section heading pattern is introduced here. It will also be used by the Featured Products section, so the CSS only needs to be written once.

The heading is centred text flanked on both sides by a horizontal rule. This is achieved with flexbox — the `::before` and `::after` pseudo-elements grow to fill available space on either side of the `<h2>`, pushing it to the centre. No extra wrapper or `<hr>` elements needed.

```html
<div class="section-heading-wrapper">
    <div class="section-heading">
        <h2>Best Selling</h2>
    </div>
</div>
```

```css
.section-heading-wrapper {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 8px;
}

.section-heading {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 40px;
}

.section-heading::before,
.section-heading::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--border); /* #EAEAEA */
}

.section-heading h2 {
    font-size: 24px;
    text-transform: uppercase;
    letter-spacing: 1.6px;
    font-weight: 700;
    white-space: nowrap;
}
```

### Best Selling Wrapper

This wrapper will contain the whole "Best Selling" section.
The wrapper contains the `.section-heading-wrapper` and the inner `.best-selling-grid`. The wrapper provides top padding of 10px to breathe after the categories section. We will give it a background-color of `#FFFFFF`.

Here is the HTML:
```html
<div class="best-selling-wrapper">
    <div class="section-heading-wrapper">
        <div class="section-heading">
            <h2>Best Selling</h2>
        </div>
    </div>
</div>
```

Here is the CSS:
```css
.best-selling-wrapper {
    background: var(--bg); /* #FFFFFF */
    padding-top: 10px;
}
```

### Best Selling Grid

This grid will be a grid of all the best selling furniture products arranged in 4 columns in one row. Each product is a grid column.

After visual feedback, we may consider a 3 column grid with 3 product cards. We will see.

Here is the html:
```html
<div class="best-selling-wrapper">
    <div class="section-heading-wrapper">
        <div class="section-heading">
            <h2>Best Selling</h2>
        </div>
    </div>
    <div class="best-selling-grid">
    </div>
</div>
```

Here is the CSS for the `.best-selling-grid`:
```css
.best-selling-grid {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 8px 60px 8px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
}
```

### Product Card

Each product card is an anchor `<a>` tag with the class `product-card`. It contains two things: an image area and an info row with the product name and price.

The image area uses `aspect-ratio: 3 / 4` to keep cards portrait-shaped, which suits furniture photography. The background `--bg-subtle` shows while the image is loading or if no image is set yet. Real product images go inside as `<img>` tags. The CSS handles the sizing automatically via `object-fit: cover`.

The info row use `justify-content: space-between` to push the name to the left and the price to the right.

```html
<div class="best-selling-grid">
    <a class="product-card" href="#">
        <div class="product-card-image">
            <!-- <img src="..." alt ="..."> goes here-->
        </div>
        <div class="product-card-info">
            <span class="name">Accent Chair</span>
            <span class="price">K 4,500</span>
        </div>
    </a>
    <!-- repeat x3 for remaining products -->
</div>
```

Add the following CSS:
```css
.product-card {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: var(--text);
    gap: 0.75rem;
}

.product-card-image {
    background: var(--bg-subtle);
    aspect-ratio: 3 / 4;
    overflow: hidden;
}

.product-card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
}

.product-card:hover .product-card-image img {
    transform: scale(1.04);
}

.product-card-info {
    display: flex;
    justify-content: space-between;
}

.product-card-info .name {
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
}

.product-card-info .price {
    font-size: 13px;
    color: 7A7A7A;
}
```

## Add Featured Products Section

### Wrapper & Section Heading

The Featured Products section reuses the `.section-heading` pattern from Best Selling — no new CSS needed for the heading. The wrapper adds `10px` padding top and bottom.

```html
<div class="featured-wrapper">
    <div class="section-heading-wrapper">
        <div class="section-heading">
            <h2>Featured Products</h2>
        </div>
    </div>
</div>
```

```css
.featured-wrapper {
    padding: 60px 0;
    background: var(--bg);
}
```