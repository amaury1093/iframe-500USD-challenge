# Challenge: Make an iframe show `startpage.com`

> This is an experiment: use Github as a bounty platform to solve a challenge. 🤔

# 💰 Prize: $500 USD

I will wire you $500 if you solve the challenge below.

## Challenge description

The challenge is to show https://startpage.com inside an `<iframe>`. Currently, if you simply do `<iframe src="https://startpage.com" />`, it doesn't work, [see demo](http://amaurym.com/iframe-500USD-challenge/).

```
Request:
iframe ---> startpage.com

Response:
iframe <-(❌ Doesn't Work)-- startpage.com
```

StartPage adds `X-Frame-Options: SAMEORIGIN` headers and some CSPs to disallow this by default. The required solution MUST use a custom proxy. This proxy CAN strip those headers and CAN modify the request/response in other ways. The goal is to return a response to the iframe which will be able to show https://startpage.com.
```
Request:
iframe ---> PROXY (e.g. localhost:3000) ---> startpage.com

Response:
iframe <-(✅ Works)-- PROXY (e.g. localhost:3000) <---- startpage.com
                         ^
                         |
                         |
                     The challenge is 
                     to write this code.
```

## Submission

Your submission MUST follow the rules:

1. Fork this repo, submit your solution as a [Pull Request](https://opensource.com/article/19/7/create-pull-request-github).
2. Your code will be licensed under the [MIT license](./LICENSE).
3. Use JavaScript. You can use any NPM library that is compatible with the license.
4. Obviously, https://startpage.com MUST show inside in iframe.
5. CSS and JavaScript inside the iframe MUST work. The look & feel from the iframe should be the same as directly from your browser tab.
6. Navigation inside the iframe MUST work. If I search for something on StartPage from within the iframe, it should work. If I go to the settings page, it should work.
7. The submission MUST work on latest stable versions of Chrome, Firefox and Safari.
8. The submission CANNOT use a browser extension, or modify the browser's default settings.

The prize will be rewarded to the author of the first pull request which follows all the rules above, via Wire Transfer.

## Get Started

After forking, run:

```bash
yarn install
yarn start # Will run the proxy server on localhost:3000
```

Then, open `index.html`. You'll see 2 iframes. The first one shows https://starpage.com, and it doesn't work. The second one shows https://localhost:3000, which proxies StartPage through localhost:3000, a local server. Modify the `server.js` code until the proxy works.

Happy coding!
