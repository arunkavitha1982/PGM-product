function offer1() {
        let offer_title = document.querySelector(".offer_title_1");
        let price1 = document.querySelector(".price1");
        let offer_content = document.getElementById("content_pare_1");
        let expire_date = document.querySelector(".footer1");

        offer_title.textContent = "AIR DUCT WHOLE HOUSE PACKAGE";
        price1.textContent = "$79";
        offer_content.textContent = "AGITATING & AIR WASHING OF SUPPLY DUCTS, USING THE HEPA AIR METHOD";
        expire_date.textContent = "Offer Expires: 06/06/2023";

        const offer = {
                price: price1,
                head: offer_title,
                content: offer_content,
                date: expire_date
        }

}

function offer2() {
        let offer_title = document.querySelector(".offer_title_2");
        let price2 = document.querySelector(".price2");
        let offer_content = document.getElementById("content_pare_2");
        let expire_date = document.querySelector(".footer2");

        offer_title.textContent = "AIR DUCT WHOLE HOUSE PACKAGE";
        price2.textContent = "$89";
        offer_content.textContent = "AGITATING & AIR WASHING OF SUPPLY DUCTS, USING THE HEPA AIR METHOD";
        expire_date.textContent = "Offer Expires: 06/06/2023";

        const offer2={
                price: price2,
                head: offer_title,
                content: offer_content,
                date: expire_date
        }
}

function offer3() {
        let offer_title = document.querySelector(".offer_title_3");
        let price3 = document.querySelector(".price3");
        let offer_content = document.getElementById("content_pare_3");
        let expire_date = document.querySelector(".footer3");

        offer_title.textContent = "NEW AIR DUCT CLEANING PACKAGE";
        price3.textContent = "$69";
        offer_content.textContent = "ADVANCED AGITATING & AIR WASHING OF SUPPLY DUCTS, USING THE LATEST HEPA AIR METHOD";
        expire_date.textContent = "Offer Expires: 12/31/2023";

        const offer3={
                price: price3,
                head: offer_title,
                content: offer_content,
                date: expire_date
        }
}

function offer4() {
        let offer_title = document.querySelector(".offer_title_4");
        let price4 = document.querySelector(".price4");
        let offer_content = document.getElementById("content_pare_4");
        let expire_date = document.querySelector(".footer4");

        offer_title.textContent = "NEW AIR DUCT CLEANING PACKAGE";
        price4.textContent = "$69";
        offer_content.textContent = "ADVANCED AGITATING & AIR WASHING OF SUPPLY DUCTS, USING THE LATEST HEPA AIR METHOD";
        expire_date.textContent = "Offer Expires: 12/31/2023";
        const offer3={
                price: price4,
                head: offer_title,
                content: offer_content,
                date: expire_date
        }
    }
offer1();
offer2();
offer3();
offer4();

