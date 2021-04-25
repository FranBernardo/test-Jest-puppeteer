const puppeteer = require('puppeteer');


const login = 'https://github.com/login';

(async ()=>{
    const browser = await puppeteer.launch({
        headless:false
    });
    const page = await browser.newPage();
    await page.goto(login);
    
})