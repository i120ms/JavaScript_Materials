// Date (year, month, day, hour, minute, second, ms)

        let date1 = new Date(2025, 9, 10, 4, 4, 4, 4);
        console.log(date1);


        let date2 = new Date("2025-05-02T12:00:00Z"); // T = time, Z = pm
        console.log(date2);


        let date = new Date();

        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        const hour = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const dayOfWeek = date.getDay();
        
        console.log(year, month, day, hour, minutes, seconds, dayOfWeek);


        let date4 = new Date();

        date4.setFullYear(2023);
        date4.setMonth(0);
        date4.setDate(1);
        date4.setHours(2);
        date4.setMinutes(3);
        date4.setSeconds(5);

        console.log(date4);


        let date5 = new Date("2023-12-31");
        let date6 = new Date("2024-01-01");
        
        if(date5 > date6){
            console.log("HAPPY NEW YEAR!");
        }
