
import { chromium,test,Page } from "@playwright/test";

test.describe("login test",async () =>{
      test("verify login page",async ({page})=>{
      
      await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=information/information&information_id=4");
     
       await page.hover("//span[normalize-space()='Mega Menu']");
       await page.click("//a[normalize-space()='Headphones']");
})
})