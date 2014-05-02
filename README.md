# Email Scheduler
_A simple way to schedule email from SendGrid, using Iron.io_

## Usage
To use, simply [queue a task](http://dev.iron.io/worker/#tasks) for your worker, with the task's payload set to any of the [JSON accepted by SendGrid's Node Library](https://github.com/sendgrid/sendgrid-nodejs#available-params) and `api_user` and `api_key`.

### Usage Example
```json
{
  "api_user" : "YOUR_SENDGRID_USERNAME",
  "api_key" :  "YOUR_SENDGRID_PASSWORD",
  "to" : "nick@sendgrid.com",
  "from" : "nick@sendgrid.com",
  "subject" : "Look at this cool email!",
  "text" : "I mean seriously, it was scheduled with Iron.io-- so cool!"
}
```

## Setup
To get this Worker running, do the following:

1. Clone the repo: `git clone https://github.com/nquinlan/sendgrid-scheduler`
2. Move into the repo: `cd sendgrid-scheduler`
3. Place your `iron.json` file in the repo: _e.g._ `mv ~/Downloads/iron.json ./` (You can download your `iron.json` by clicking credentials then "Download iron.json" found in your project, while on the [Iron.io HUD](https://hud.iron.io/))
4. Upload the worker: `iron_worker upload EmailScheduler` (This requires the `iron_worker` gem, you can get it with `gem install iron_worker`)

## License
This project is dual licensed MIT and Beerware. Pick the license that works best for you and your project.

### MIT License

> The MIT License (MIT)
>
> Copyright (c) 2014 Nick Quinlan
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

### Beerware License

```js
/*
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <nick@sendgrid.com> wrote this file. As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return Nick Quinlan
 * ----------------------------------------------------------------------------
 */
 ```
 