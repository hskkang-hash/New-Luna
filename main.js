
document.addEventListener('DOMContentLoaded', () => {
    const birthdayInput = document.getElementById('birthday');
    const getFortuneButton = document.getElementById('get-fortune');
    const fortuneContainer = document.getElementById('fortune-container');
    const fortuneText = document.getElementById('fortune-text');

    const fortunes = {
        Aries: "Your adventurous spirit will lead you to exciting new opportunities today. Embrace them!",
        Taurus: "Patience is your virtue. A calm and steady approach will bring you success.",
        Gemini: "Your social skills are at their peak. Connect with others and share your ideas.",
        Cancer: "Listen to your intuition today. It will guide you in the right direction.",
        Leo: "Your creativity is shining bright. Express yourself and let your talents be seen.",
        Virgo: "A meticulous approach will solve a lingering problem. Pay attention to the details.",
        Libra: "Harmony and balance are key today. Seek fairness in all your interactions.",
        Scorpio: "Your passionate nature will drive you to achieve your goals. Stay focused.",
        Sagittarius: "A journey of a thousand miles begins with a single step. Start your next adventure.",
        Capricorn: "Your hard work and discipline will pay off. Keep up the great effort.",
        Aquarius: "Your innovative ideas will inspire others. Don't be afraid to be different.",
        Pisces: "Your compassionate heart will touch someone's life today. Spread kindness.",
    };

    getFortuneButton.addEventListener('click', () => {
        const birthday = new Date(birthdayInput.value);
        if (isNaN(birthday.getTime())) {
            alert("Please enter a valid birthday.");
            return;
        }

        const zodiacSign = getZodiacSign(birthday);
        fortuneText.textContent = fortunes[zodiacSign];

        fortuneContainer.classList.remove('hidden');
    });

    function getZodiacSign(date) {
        const month = date.getMonth() + 1;
        const day = date.getDate();

        if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries";
        if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Taurus";
        if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gemini";
        if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer";
        if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo";
        if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo";
        if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra";
        if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Scorpio";
        if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Sagittarius";
        if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "Capricorn";
        if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Aquarius";
        if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return "Pisces";
    }
});
