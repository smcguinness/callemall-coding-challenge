import faker from 'faker';
import puppeteer from 'puppeteer';

let page;
let browser;
const width = 1440;
const height = 767;

const APP = 'http://localhost:3000';

describe('Login', () => {
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 80,
      args: [`--window-size=${width},${height}`],
    });
    page = await browser.newPage();
    await page.deleteCookie({ name: 'MEETUP_TRACK', domain: '.meetup.com' });
    await page.deleteCookie({ token: 'token' });
    await page.setViewport({ width, height });
  });

  afterAll(async () => {
    await page.deleteCookie({ name: 'MEETUP_TRACK', domain: '.meetup.com' });
    await page.deleteCookie({ name: 'token' });
    browser.close();
  });
  it('should redirect to login page', async () => {
    await page.goto(APP);
    const pathName = await page.evaluate(() => window.location.pathname);
    expect(pathName).toEqual('/login');
  }, 16000);
  it('should redirect to meetup.com to login', async () => {
    await page.goto(`${APP}/login`);

    await page.waitForSelector('button[type=button]');
    await page.click('button[type=button]');
    const path = await page.evaluate(() => {
      const { origin, pathname } = window.location;
      return { origin, pathname };
    });
    expect(`${path.origin}${path.pathname}`).toEqual('https://secure.meetup.com/login/');
  }, 16000);
  it('should authenticate meetup user', async () => {
    await page.goto(`${APP}/login`);

    await page.waitForSelector('button[type=button]');
    await page.click('button[type=button]');

    await page.waitForSelector('div[id=paneLogin]');
    await page.click('input[name=email]');
    await page.type('input[name=email]', 'aubobq7@wbdev.tech');
    await page.click('input[name=password]');
    await page.type('input[name=password]', '123456');
    await page.click('input[name=submitButton]');
    await page.waitFor(8000);
    const path = await page.evaluate(() => {
      const { origin, pathname } = window.location;
      return { origin, pathname };
    });
    expect(`${path.origin}${path.pathname}`).toEqual('http://localhost:3000/');
  }, 30000);
});

describe('Logout', () => {
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 80,
      args: [`--window-size=${width},${height}`],
    });
    page = await browser.newPage();
    await page.deleteCookie({ name: 'MEETUP_TRACK', domain: '.meetup.com' });
    await page.deleteCookie({ token: 'token' });
    await page.setViewport({ width, height });
  });

  afterAll(async () => {
    await page.deleteCookie({ name: 'MEETUP_TRACK', domain: '.meetup.com' });
    await page.deleteCookie({ name: 'token' });
    browser.close();
  });
  it('should log out a user', async () => {
    await page.goto(`${APP}/login`);

    await page.waitForSelector('button[type=button]');
    await page.click('button[type=button]');

    await page.waitForSelector('div[id=paneLogin]');
    await page.click('input[name=email]');
    await page.type('input[name=email]', 'aubobq7@wbdev.tech');
    await page.click('input[name=password]');
    await page.type('input[name=password]', '123456');
    await page.click('input[name=submitButton]');
    await page.waitFor(8000);

    await page.click('svg[title=Logout]');
    await page.waitFor(8000);
    const path = await page.evaluate(() => {
      const { origin, pathname } = window.location;
      return { origin, pathname };
    });
    expect(`${path.origin}${path.pathname}`).toEqual('http://localhost:3000/login');

  }, 30000);
})
