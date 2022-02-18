# Challenge: Make the iframe below show startpage.com

## What is it?

This is a test repo to show startpage.com in an `<iframe>`. StartPage add headers to disallow this by default, but maybe by using a custom proxy, we can strip those headers?

```
Request:
browser ---> localhost:3000 ---> startpage.com

Response:
browser <---- localhost:3000 <--(modify response to allow iframe embedding -- startpage.com
```

## Get Started

Run in this repo:

```bash
yarn install
yarn start
```

Then, open `index.html`. For example, on firefox you should see

![](./screenshot.png)

The challenge is to make this iframe show https://startpage.com.
