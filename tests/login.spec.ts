import { chromium,test,Page } from "@playwright/test";
//const{ chromium,test,expect,page}= require('@playwright/test');
test.describe("login test",async () =>{
      test("verify login page",async ({page})=>{
      
      await page.goto("https://lms.kluniversity.in/login/index.php");
      await page.fill("[name='username']","2301050106");
      await page.fill("[name='password']","4512Kbr@");
      await page.click("[type='submit']");
})
})