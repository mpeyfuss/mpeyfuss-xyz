---
title: How to Read URLs
tags: blog
date: 2024-01-29
image: /assets/og/how_to_read_urls.png
card: /assets/card/how_to_read_urls.png
layout: layout.njk
published: true
---
![How to Read URLs](/assets/og/how_to_read_urls.png)

# How to Read URLs Backwards to Stay Safe

*Read URLs backwards if you want to stay safe, seriously*

Yes, you read the headline correctly. You should be reading website URLs backwards in order to stay safe online and reduce the risk of falling for phishing websites.

There are many resources online already talking about how to read website URLs to stay safe online. I’m not here to republish the same information. I actually think they are quite helpful to read through and will include them at the bottom of this article. However, I have some tips that have helped people grok this information faster and easier

## An Example Phishing Attack

The other day, I received a message from an account on X, with a blue checkmark, saying that they left me an offer of 2.8 ETH for my cryptodickbutt. At the time of writing, I have this NFT listed for above 3 ETH, so 2.8 ETH is somewhat interesting.

Notice anything strange with the image below though?

![dickbutt phishing](/assets/content/dickbutt_phishing.png)

Well, on the surface nothing seems too out of the ordinary. The link preview shows that the link is x2y2.io, however, I did find it strange that they sent me an image of the offer. But this was the only message they sent me, no other words, so perhaps they weren’t great at English.

Still, getting an offer WAY above floor is strange. I went in with caution, as you should do with EVERYTHING on the internet.

First, I didn’t click on their link. Instead, I just went to the token on X2Y2 directly. Guess what, I didn’t see their offer… so this was 100% a phishing attack.

So what are the attack vectors they threw at me?

## Attack Vectors

### Link Preview Phishing
The attacker in many scenarios like the one above use the fact that many apps render rich link previews to their advantage. The truth is, you can craft a webpage to fake itself as coming from a trustworthy source but link to a malicious source. This is exactly what they did here.

In the image below, I’ve highlighted how they make it seem like the link would go to x2y2.io, BUT, in reality, it would go to their malicious website. Read on to see where it goes.

![dickbutt link preview phishing](/assets/content/dickbutt_link_preview_phishing.png)

### Domain Phishing
There are actually several types of domain phishing. The attack vector used in the attempted attack above is what I would call sub-domain phishing, but, there are several other types to be aware of as well.

#### Sub-Domain Phishing
Of course, I decided to go to the link provided, in a secure web browser and with great caution. I DO NOT recommend that you do this, just to minimize exposure, and if you do, take EXTREME caution and DO NOT sign anything!

**I’m super serious about this, DO NOT CLICK ON LINKS!**

Well, the link led to an extremely good X2Y2 clone. The only difference between this phishing site and the real X2Y2 was the addition of a 2.8 ETH offer on the NFT and the number of views of the piece. Pretty much everything else matches up.

The attackers obviously spent a lot of time and energy crafting this phishing site to look exactly like X2Y2. So how did I determine it was a phishing site? By reading the web address, backwards!

Notice anything weird with the following image?

![x2y2 fake link](/assets/content/x2y2_fake_link.png)

Brave browser luckily makes it quite easy to identify the domain - it looks like the website is not **x2y2.io** but rather **x2y2.io.accept.bid**!

This is actually a malicious website that has a sub-domain geared towards tricking you into thinking it’s actually x2y2.io.

The attackers are taking advantage of most people reading left to right and the fact that your brain subconsciously interprets data based on patterns at lightning fast speed, where it might mistake this web address to be X2Y2. Crazy!

![big brain time](/assets/content/big_brain_time.png)

Now, I’m not going to get into all the details of what domains and sub-domains are. I think you typically understand it, and if not, just know that any human readable website name, like **google.com**, is a domain and something like **maps.google.com** is the maps sub-domain of google.com.

So how do you read website names in a way that you’re brain can’t accidentally mistake for a real website? Just follow these simple steps:

1. Read the website starting at the end and backwards (right to left)
2. Read until you hit the first period "."
3. Read the first word to the left of the period and the first word to the right of the period - this is the domain of the site you are on
4. If the domain matches what you expected, great! If not, you are on a phishing site -BE CAREFUL.

The image below shows that if we follow the 4 steps above, we would deduce that the attack above was indeed a phishing attack!

![read links backwards](/assets/content/read_links_backwards.png)

#### Other types of domain phishing

Attackers can use character substitution to fake domains. A great example of this is that the capital letter “i” looks a lot like a lowercase “L”. This can be used to fake website addresses and is EXTREMELY hard to detect. Even the 4 step process above wouldn’t catch this easily. You can paste the url into a word doc and use Times New Roman font to try and catch something like this, but there is a better mitigation strategy that I’ll go into below.

There are a few other ones out there but they are less common. I’ll include links to other sites talking about reading website addresses below so you can read up on all this!

## How do I not fall for a phishing attack?
The BEST way to not fall for a phishing attack is to use EXTREME caution for everything you do on the internet. When something seems too good to be true, be on HIGH alert. Likely, it is too good to be true.

First and foremost, be cautious when you click links. If links are coming from strangers on the internet, it is BEST practice to manually type in the expected website address. It’s annoying, but this keeps you safe from pretty much every phishing attack out there (please correct me if I’m wrong).

If you do click on a link, PLEASE learn to read website addresses properly and use the 4 step method above if you like it!

Stay safe out there!

![stay safe on the internet](/assets/content/stay_safe_on_the_internet.png)

## Additional Resources

- [How to read web addresses by Be Cyber Safe](https://www.becybersafe.com/more/how-to-read-web-addresses.html)
- [How to read web urls by Caltech](https://www.imss.caltech.edu/services/security/recommendations/how-to-read-urls)