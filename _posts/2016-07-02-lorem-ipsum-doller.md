---
layout: post
title: Lorem ipsum doller
excerpt: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
tags: lorem, ipsum, dolor, sit, amet
date: 2016-07-02 12:00:00 +0100
permalink: /posts/:title/
---

# Heading 1

## Heading 2

### Heading 3

### Heading 4

#### Heading 5

##### Heading 6

---

**Lorem ipsum dolor sit amet**, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. *Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat*. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, [sunt in culpa qui officia]() deserunt mollit anim id est laborum. ~~consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua~~.


> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

---

- Lorem ipsum dolor sit amet
  - Duis aute
  - irure dolor
  - Excepteur sint occaecat
- consectetur adipisicing elit
- sed do eiusmod tempor incididunt
- ut labore et dolore

1. Lorem ipsum dolor sit amet
2. consectetur adipisicing elit
  - Duis aute
  - irure dolor
  - Excepteur sint occaecat
3. sed do eiusmod tempor incididunt
4. ut labore et dolore

---

Lorem ipsum dolor sit amet, `consectetur adipisicing elit`, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, `quis nostrud exercitation ullamco` laboris nisi ut aliquip ex ea commodo consequat.

```javascript
const fs = require('fs')

fs.readFile('foo.txt', (err, data) => {
  if (err) throw err

  console.log(data)
})
```

```haskell
primes :: [Int]
primes = findPrimes 2 [3,5..]
  where findPrimes p xs = p : findPrimes (head onlyPrimes) onlyPrimes
          where onlyPrimes = filter (\x -> x `mod` p /= 0) xs

getPrimeAtIndex :: Int -> Int
getPrimeAtIndex n = primes !! (n - 1)
```

```haskell
primes :: [Int]
primes = findPrimes 2 [3,5..] where findPrimes p xs = p : findPrimes (head onlyPrimes) onlyPrimes where onlyPrimes = filter (\x -> x `mod` p /= 0) xs

getPrimeAtIndex :: Int -> Int
getPrimeAtIndex n = primes !! (n - 1)
```

```php
<?php

namespace Mdb\PayPal\Ipn\ListenerBuilder;
use GuzzleHttp\Client;
use Mdb\PayPal\Ipn\ListenerBuilder;
use Mdb\PayPal\Ipn\Service\GuzzleService;
abstract class GuzzleListenerBuilder extends ListenerBuilder
{
    use ModeDependentServiceEndpoint;
    /**
     * {@inheritdoc}
     */
    protected function getService()
    {
        return new GuzzleService(
            new Client(),
            $this->getServiceEndpoint()
        );
    }
}
```

---

| Lorem Ipsum Doller | Sit Amet | Consectetur adipisicing |
|--------------------|----------|-------------------------|
| Foo                | Bar      | Baz                     |
| Lorem              | Ipsum    | Doller                  |

---

![Minion](https://assets-cdn.github.com/images/modules/logos_page/Octocat.png)

---
