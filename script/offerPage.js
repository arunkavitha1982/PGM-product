function offer() {
    const offers = [
        {
            title: "A/C TUNE UP",
            price: "$49",
            content: "AGITATING & AIR WASHING OF SUPPLY DUCTS, USING THE HEPA AIR METHOD",
            expireDate: "Offer Expires: 12/16/2024",
            elements: {
                title: "#coupon_1 .offer_title_1",
                price: "#coupon_1 .price1",
                content: "#content_pare_1",
                expireDate: "#coupon_1 .footer1"
            }
        },
        {
            title: "AIR DUCT WHOLE HOUSE PACKAGE",
            price: "$99",
            content: "AGITATING & AIR WASHING OF SUPPLY DUCTS, USING THE HEPA AIR METHOD",
            expireDate: "Offer Expires: 12/28/2024",
            elements: {
                title: "#coupon_2 .offer_title_2",
                price: "#coupon_2 .price2",
                content: "#content_pare_2",
                expireDate: "#coupon_2 .footer2"
            }
        },
        {
            title: "AIR DUCT WHOLE HOUSE PACKAGE",
            price: "$55",
            content: "ADVANCED AGITATING & AIR WASHING OF SUPPLY DUCTS, USING THE LATEST HEPA AIR METHOD",
            expireDate: "Offer Expires: 12/26/2024",
            elements: {
                title: "#coupon_3 .offer_title_3",
                price: "#coupon_3 .price3",
                content: "#content_pare_3",
                expireDate: "#coupon_3 .footer3"
            }
        },
        {
            title: "NEW AIR DUCT CLEANING PACKAGE",
            price: "$69",
            content: "ADVANCED AGITATING & AIR WASHING OF SUPPLY DUCTS, USING THE LATEST HEPA AIR METHOD",
            expireDate: "Offer Expires: 12/31/2024",
            elements: {
                title: "#coupon_4 .offer_title_4",
                price: "#coupon_4 .price4",
                content: "#content_pare_4",
                expireDate: "#coupon_4 .footer4"
            }
        }
    ];

    offers.forEach(({ title, price, content, expireDate, elements }) => {
        // Safely update DOM elements if they exist
        const titleEl = document.querySelector(elements.title);
        const priceEl = document.querySelector(elements.price);
        const contentEl = document.querySelector(elements.content);
        const expireDateEl = document.querySelector(elements.expireDate);

        if (titleEl) titleEl.textContent = title;
        if (priceEl) priceEl.textContent = price;
        if (contentEl) contentEl.textContent = content;
        if (expireDateEl) expireDateEl.textContent = expireDate;
    });
}

offer();
