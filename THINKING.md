The design of the Fino Loan Management System will piggy off the design of the Winteriors website Admin app. If I go far enough with the Winteriors application, I plan to design a product catalog system complete with the search, filter, sort, categorise functionality. Other systems to consider are an online inventory management system (without payment order management), then an order management system (store pick up) no payment gateway used

---

Here is the revised CSS Design Approach. Add HTML for the content only. Define outer layout in written form. Draw the layout on paper, svg, and/or Figma. Code out the layout using HTML and CSS. Define the width and height of the layout. Draw the layout with the updated width and height

---

What I thought I needed to do, was just to update the website and send in my application. It turns out I have to first make sense of things. Why they exist? What value they bring? It turns out it's a rabbit hole. Now I have to figure out a prioritization strategy.

- CV (Technical Writer, Software Developer, Community Manager)
- Application Letter
- Cover Letter
- Document outlining the role of an Online Sales Associate
- Renewed Website link
- Document describing the changes implemented on website (includes problems)
- Document describing how to set it all up
- Document outlining future considerations
- Document for Website Maintenance

- SEO
- Reddit Content Strategy
- Product Catalog Content Strategy
- Blog Content Strategy
- Home Page Content Strategy
- Contact Form System (CRM)



---

Add HTML, define layout, draw layout(horizontal or vertical), code layout (HTML then CSS), define width and height, redraw layout, code width and height, define alignment, draw alignment, code alignment(horizontal or vetical), define spacing, draw spacing, code spacing (horizontal or vertical)

---

So what is the actual CSS design approach? We define a structure, either horizontal or vetical. After defining a structure we proceed to look at dimensions of the full layout. Is it going to cover the full width of the view? Is it going to be a fixed width or a variable width? What is the height? Is it a hard coded value? or is it variable, maybe based on the dimensions of the inner elements (margin, padding)?

Define a fixed width and fixed height to start.

Next comes alignment of inner elements of the layout. For vertical alignment are all of them centered or are they at the top or bottom of the layout?

Next comes the vertical spacing. In this regard spacing between the outer layer and the inner elements. Usually defined by padding.

Then comes the horizontal spacing. In this regard spacing between inner elements. Is it explicitly defined, hardcoded or computed?

Elemental design: Define dimensions, alignment, spacing within an element's container. Adjust based on visual feedback

**Intruding Thought**: The margin for the outer layer of a section should be defined only when all the other sections have been combined in view, then from visual feedback a number can be figured out.

## CSS Design Approach

Let's look at a design approach using HTML and CSS that can be used on websites. The first thing to consider is the raw HTML. In this description, I will use a structure like a Header to guide my thinking.

Typical headers have the following structure: a Logo on the left, quick menu links in the middle and then a menu dropdown to the right. Some are sticky, some are sticky on scrolling up, depends on preference and perceived use case.

Back to the first step, in the design process. One should start with the raw HTML without any divs persay. Something like this:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wino</title>
</head>
<body>
    <img src="logo.png" alt="Wino logo">
    <h1>Wino</h1>
    <h2>Menu</h2>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</body>
</html>
```

The next step is to define a structure. We don't want the default vertical layout given by the browser. We want our header to appear horizontally with all the text items appearing in a row.

To achieve that effect, we will use a flexbox. To implement a flexbox, we first have to wrap all the header items in an html element called a `header` like so:
```html
<header>
     <img src="logo.png" alt="Wino logo">
    <h1>Wino</h1>
    <h2>Menu</h2>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
    </ul>   
</header>
```

Next add a style attribute in your opening header tag and give it the CSS declaration: `display: flex;` like so:
```html
<header style="display: flex;">
```