## Winteriors Website Pages

- home
- shop
- about
- contact

- blog
- product
- article

You should include the "Get Discount Info" section in the home page of the website. Put it below the "Our Clients" section.

## Online Sales Associate

I have noticed that you sometimes post videos on your social media pages. I can repackage these on the website and make them search engine friendly so that the website gets more visitors and the quality videos get more visibility. Making them search engine friendly involves transcribing the videos, adding captions, add an article and page associated with the video.

I can include a Quote Generation Tool on the website. This is where a visitor to the website can help estimate the costs of purchasing furniture.

Later on, once systems are stable and in place we can begin establishing setting up a complete online ordering process via the website. Where customers can make purchases using a payment gateway that supports bank cards and mobile money. Complete with inventory management, order management and then order fulfilment.

Reddit is a unique online platform that deserves its own paragraph. I plan to use it as a channel to acquire potential clients. I will be promoting some of the content generated from the Facebook page to the Reddit platform. The difference between Reddit and Facebook has to do with the fact that Reddit is more tailored to a text based audience. That means the people engaging with your content would like to read what you offer, the more in depth your content the more engagement you get.

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

---

Outline the problems with the current Categories section of the Wino website. Include details on each problem and suggest a solution to the problem. Kinda like this:

### Problem: Links are dead
When a user click a link nothing shows up. There is no visible response at all which can be misleading. Here is a short video illustrating this:
<video></video>

### Suggested Solutions
The solution will be to first create a page where the user must go to see the content. For instance if there is a link like "Bed", then a link with products that match the category must be created.

An alternative is to create a pop-up window each time a link is clicked. The pop-up can show what is expected, so if it's "Beds", then a user should expect to see beds (Maybe a scrollbar with beds). Or the pop-up can link to the Wino WhatsApp catalog (assuming everyone uses WhatsApp lol).

---

This document is a guide to revamping the Wino website and then setting up an ecommerce strategy then outlining a role for the Online Sales Associate responsible for managing the website.

What's the plan?
The plan is to start off by fixing the website. The goal would be to reproduce the design as closely as possible using different set of CSS. A CSS styling I own that I can manage to update when there is need.

We will start with just the desktop view, then move on to the mobile view. I guess in this case we will start off with just 1 breakpoint.

After reproducing the website, the next step would be to fix the links. There are a lot dead links on the website that doesn't bode well for the Wino team as they are a fast growing company. A little bit of professionalism on the website matches well with their status.

The "Shop" link should lead to the catalog of products in the store. Each product in the store should have a name and price. Hopefully, with enough time we can produce a list of categories to use.

The "About Us" link should lead to the About Us page of the website. The current "About Us" page would need to be fixed. It is very imperative that we strive to maintain the aesthetic of the website while making sure it works as expected.

The "Contact Us" link should lead to the Contact Us section. The "Contact Us" section should be found on every page. It will include the "Contact" form to capture leads, A map showcasing the locations of the 2 branches, then of course the addresses and contact details of the stores. The Working hours as well as the Directions to get to Wino ought to be included.

The "Footer" section should include the full logo for Wino to the left, next comes a list of "Menu" links. Alternatively, we can place links to products that we want sold. Then comes the "Social Media" links and the list of Privacy Terms, Disclaimer Notice, Cookie Policy, Terms and Conditions. Below all the lists is the Copyright information (Year, All Rights Reserved).

## Winteriors

- Header 
- Fonts (Jost, Heebo)
- Hero Circle should move

## Ecommerce Workflow

- Customer places order and pays, gives address details, contact details 
- Store Manager receives notification of order.
- Store Manager confirms payment in payment provider dashboard
- Store Manager contacts customer with copy of order
- Store Manager confirms delivery details and contact person
- Goods are loaded on delivery van customer is notified with picture and given ETA
- Delivery van arrives at destination.
- Customer confirms and signs on a form that they have received the delivery and is given receipt
- Delivery van returns 
- Order is completed in dashboard
- "No returns policy"

## Online Sales Associate

- AEO
- Internal SEO
- External SEO
- Cleaning Equipment (Mini Hoover, Mini Dryer, Shampoo, Spray, Polish, Oil, Finish, Perfume, Cloths, Brushes, Detergent Instructions)
- Design for Homes (Tight spaces able to fit)
- Annotation of Videos (Price, Description, Pictures, Dimensions)
- Accessories (Throws, Covers, Pillows, Pilie Covers, Cabinet covers, mats)
- Partners (Curtains, Carpets, Duvets)
- Articles (Office look, lounge look, boardroom look, lobby look, outdoor look, listicles, how to clean and maintain furniture, design or decor tips, client testimonials or case studies, product showcase, event features, seasonal posts, holiday posts, partnership posts)
- Mailing list for newsletters, key updates and so on.
- Website Maintenance (Up to date and accurate information, everything works as expected, clean design, catalog, quote generator, contact form, web admin to see messages, list of clients, newsletter subscribers, number of visits, uptime, incident reports, weekly summary reports)
- Client funnels (Lead generation, Lead qualification, etc...)
- Reddit posting, LinkedIn groups posting
- Coordination with Social Media Team
- Sofa with recliner, charging port, hidden leds, cup holder, retractable leg rest
- Inbound (CCTV, decor, automation, virtual desing samples)
- Podcast sponsoring, Brand Ambassador with podcast, Live panels with furniture
- Virtual Courses on Carpentry, Upholstery, Tailoring, Design, Interior Decor, Sales and Marketing

---

Describe contents of the website. Why they exist? What's their purpose? Include a glossary and picture map with key.

Admin app has got one user. Includes a manual. Backups. File server. Database server.

Store Manager is responsible for updating the website. This includes adding products in batches. The pictures, the name, the price, the accessories, the description, the dimensions, the reviews.

Reviews must have a process of execution. After a client has purchased a certain product, you may follow up to enquire for their opinion. Questions concerning comfort, concerning experience may be given to the customer and in response we can get something.

Describe a Before and After. Before you fixed the website, what were some of the isssues? List them out and explain. For each issue explain the fix you implemented.

Include a description of the contact form. Why it exists? Include a description of the quote tool. Why it exists?

Outline an ecommerce strategy for the business. From Manual to Semi Automated

## Top bar 
- full width
- content max-width: 1140px
- height: 49px;
- font-size: 14px;
- font-weight: 300;
- font-family: "Heebo", Sans-serif;
- background-color: #292929
- color: #FFFFFF

Far right is the email address: hello@winteriorz.com with envelope icon to the left of it.

Far right is a facebook icon in a white circle background with the color #292929.

Next to it is an Instagram icon in a white circle background with the color #292929.

Logo font: Essones Headline Regular

Gap between the 2 icons is 1rem.

## Header
```css
h2 {
    font-family: "Jost", Sans-serif;
    font-size: 51px;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 1.2em;
    letter-spacing: 1.5px;
    color: #292929;
}

p {
    font-family: "Heebo", Sans-serif;
    font-size: 16px;
    font-weight: 300;
    color: #7A7A7A;
}

a {
    background-color: #292929;
    font-family: "Jost", Sans-serif;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    fill: #FFFFFF;
    color: #FFFFFF;
}

.global {
    --e-global-color-primary: #292929;
    --e-global-color-secondary: #F5F5F5;
    --e-global-color-text: #7A7A7A;
    --e-global-color-accent: #D1BC92;
    --e-global-color-caa39c0: #EAEAEA;
    --e-global-typography-primary-font-family: "Jost";
    --e-global-typography-primary-font-weight: 500;
    --e-global-typography-primary-text-transform: uppercase;
    --e-global-typography-primary-letter-spacing: 1.6px;
    --e-global-typography-secondary-font-family: "Jost";
    --e-global-typography-secondary-font-weight: 400;
    --e-global-typography-secondary-text-transform: uppercase;
    --e-global-typography-secondary-letter-spacing: 1.3px;
    --e-global-typography-text-font-family: "Heebo";
    --e-global-typography-text-font-weight: 300;
    --e-global-typography-accent-font-family: "Heebo";
    --e-global-typography-accent-font-weight: 400;
    color: #7A7A7A;
    font-family: "Heebo", Sans-serif;
    font-weight: 300;
}
```


## Hero

## Contacts
- WhatsApp:
- Facebook:
- Instagram: