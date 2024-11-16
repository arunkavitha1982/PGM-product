function user() {
    const usersData = [
        {
            name: "Samantha Lee",
            logo: "S",
            comment: "Pradeep from PG Mechanical was a lifesaver when our AC broke during a heatwave. He came promptly, fixed the issue, and even gave us tips on maintaining our system. Highly recommend!"
        },
        {
            name: "Ahmed Hassan",
            logo: "A",
            comment: "We've been using PG Mechanical for our annual HVAC checkups for years. Pradeep and his team are always punctual, professional, and thorough. Our energy bills have never been lower!"
        },
        {
            name: "Elena Kovač",
            logo: "E",
            comment: "After struggling with an inefficient heating system, we called PG Mechanical. Pradeep suggested a new, energy-efficient model and handled the installation flawlessly. Our home has never been more comfortable."
        },
        {
            name: "Anand Srivastav",
            logo: "A",
            comment: "As new homeowners, we were clueless about HVAC maintenance. Pradeep from PG Mechanical took the time to educate us and set up a preventive maintenance plan. We're grateful for their patient, informative service."
        },
        {
            name: "Hiroshi Tanaka",
            logo: "H",
            comment: "Our data center requires precise temperature control 24/7. PG Mechanical's expertise in commercial HVAC has been crucial to our operations. Pradeep Gosal and his team provide reliable service and cutting-edge solutions."
        },
        {
            name: "Isabella Rossi",
            logo: "I",
            comment: "PG Mechanical transformed the refrigeration system in our multi-story restaurant. Pradeep's innovative approach not only improved efficiency but also kitchen space. Their maintenance keeps everything smoothly."
        },
        {
            name: "Vikram",
            logo: "V",
            comment: "As new homeowners, we were clueless about HVAC maintenance. Pradeep from PG Mechanical took the time to educate us and set up a preventive maintenance plan. We're grateful for their patient, informative service."
        },
        {
            name: "Arunkumar",
            logo: "A",
            comment: "Pradeep from PG Mechanical was a lifesaver when our AC broke during a heatwave. He came promptly, fixed the issue, and even gave us tips on maintaining our system. Highly recommend!"
        }
    ];

    const userList = usersData.map((user, index) => {
        const userIndex = index + 1;

        const userName = document.querySelector(`.user${userIndex}`);
        const userLogo = document.querySelector(`.userIcon${userIndex}`);
        const userComment = document.querySelector(`.user_para${userIndex}`);

        if (userName) userName.textContent = user.name;
        if (userLogo) userLogo.textContent = user.logo;
        if (userComment) userComment.textContent = user.comment;

        return {
            Name: userName,
            logo: userLogo,
            comments: userComment,
        };
    });

}

user();
