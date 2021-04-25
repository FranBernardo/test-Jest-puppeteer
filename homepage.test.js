require('dotenv').config();

const timeout = 30000;

    beforeAll(async () => {
        await page.goto(URL);
    });

    describe("validation", () => {
       
        test("login", async () => {
            await page.waitForSelector('#login_field')
            await page.type('#login_field', process.env.Email , {delay: 100});
            await page.type('input[name="password"]', process.env.password, {delay: 100});
            await page.keyboard.press('Enter');
           
            
            expect(html).toBe('valid');
        }, timeout);
    });