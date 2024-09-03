function offer() {
        const offers = [
            {
                title: "A/C TUNE UP",
                price: "$49",
                content: "AGITATING & AIR WASHING OF SUPPLY DUCTS, USING THE HEPA AIR METHOD",
                expireDate: "Offer Expires: 12/16/2024",
                elements: {
                    title: ".offer_title_1",
                    price: ".price1",
                    content: "#content_pare_1",
                    expireDate: ".footer1"
                }
            },
            {
                title: "AIR DUCT WHOLE HOUSE PACKAGE",
                price: "$99",
                content: "AGITATING & AIR WASHING OF SUPPLY DUCTS, USING THE HEPA AIR METHOD",
                expireDate: "Offer Expires: 12/28/2024",
                elements: {
                    title: ".offer_title_2",
                    price: ".price2",
                    content: "#content_pare_2",
                    expireDate: ".footer2"
                }
            },
            {
                title: "AIR DUCT WHOLE HOUSE PACKAGE",
                price: "$55",
                content: "ADVANCED AGITATING & AIR WASHING OF SUPPLY DUCTS, USING THE LATEST HEPA AIR METHOD",
                expireDate: "Offer Expires: 12/26/2024",
                elements: {
                    title: ".offer_title_3",
                    price: ".price3",
                    content: "#content_pare_3",
                    expireDate: ".footer3"
                }
            },
            {
                title: "NEW AIR DUCT CLEANING PACKAGE",
                price: "$69",
                content: "ADVANCED AGITATING & AIR WASHING OF SUPPLY DUCTS, USING THE LATEST HEPA AIR METHOD",
                expireDate: "Offer Expires: 12/31/2024",
                elements: {
                    title: ".offer_title_4",
                    price: ".price4",
                    content: "#content_pare_4",
                    expireDate: ".footer4"
                }
            }
        ];
    
        offers.forEach(offer => {
            document.querySelector(offer.elements.title).textContent = offer.title;
            document.querySelector(offer.elements.price).textContent = offer.price;
            document.querySelector(offer.elements.content).textContent = offer.content;
            document.querySelector(offer.elements.expireDate).textContent = offer.expireDate;
        });
    }
    
    offer();
    