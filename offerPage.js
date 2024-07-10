function offer() {
        let offer_title1 = document.querySelector(".offer_title_1");
        let price1 = document.querySelector(".price1");
        let offer_content1 = document.getElementById("content_pare_1");
        let expire_date1 = document.querySelector(".footer1");

        offer_title1.textContent = "AIR DUCT WHOLE HOUSE PACKAGE";
        price1.textContent = "$79";
        offer_content1.textContent = "AGITATING & AIR WASHING OF SUPPLY DUCTS, USING THE HEPA AIR METHOD";
        expire_date1.textContent = "Offer Expires: 12/16/2024";

        const offer1 = {
                price: price1,
                head: offer_title1,
                content: offer_content1,
                date: expire_date1
        }



        let offer_title2 = document.querySelector(".offer_title_2");
        let price2 = document.querySelector(".price2");
        let offer_content2 = document.getElementById("content_pare_2");
        let expire_date2 = document.querySelector(".footer2");

        offer_title2.textContent = "AIR DUCT WHOLE HOUSE PACKAGE";
        price2.textContent = "$89";
        offer_content2.textContent = "AGITATING & AIR WASHING OF SUPPLY DUCTS, USING THE HEPA AIR METHOD";
        expire_date2.textContent = "Offer Expires: 12/28/2024";

        const offer2={
                price: price2,
                head: offer_title2,
                content: offer_content2,
                date: expire_date2
        }



        let offer_title3 = document.querySelector(".offer_title_3");
        let price3 = document.querySelector(".price3");
        let offer_content3 = document.getElementById("content_pare_3");
        let expire_date3 = document.querySelector(".footer3");

        offer_title3.textContent = "NEW AIR DUCT CLEANING PACKAGE";
        price3.textContent = "$69";
        offer_content3.textContent = "ADVANCED AGITATING & AIR WASHING OF SUPPLY DUCTS, USING THE LATEST HEPA AIR METHOD";
        expire_date3.textContent = "Offer Expires: 12/26/2024";

        const offer3={
                price: price3,
                head: offer_title3,
                content: offer_content3,
                date: expire_date3
        }


        let offer_title4 = document.querySelector(".offer_title_4");
        let price4 = document.querySelector(".price4");
        let offer_content4 = document.getElementById("content_pare_4");
        let expire_date4 = document.querySelector(".footer4");

        offer_title4.textContent = "NEW AIR DUCT CLEANING PACKAGE";
        price4.textContent = "$69";
        offer_content4.textContent = "ADVANCED AGITATING & AIR WASHING OF SUPPLY DUCTS, USING THE LATEST HEPA AIR METHOD";
        expire_date4.textContent = "Offer Expires: 12/31/2024";
        const offer4={
                price: price4,
                head: offer_title4,
                content: offer_content4,
                date: expire_date4
        }

        const list=[offer1,offer2,offer3,offer4]

}
offer()