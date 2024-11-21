
        let energy = 100;
        const statusMessage = document.getElementById('message');
        const battery = document.getElementById('battery');
        const dog = document.getElementById('dog');
        const playButton = document.getElementById('play');
        const restoreButton = document.getElementById('restore');

        function updateBattery() {
            battery.style.backgroundColor = energy > 70 ? 'green' : energy > 50 ? 'orange' : energy > 20 ? 'yellow' : 'red';
            battery.innerText = `Energy: ${energy}%`;

            if (energy > 70) {
                dog.src = './assets/images/happy1_g.jpg';
                statusMessage.textContent = "I’m happy! Let’s play!";
            } else if (energy > 50) {
                dog.src = './assets/images/sad2_b.jpg';
                statusMessage.textContent = "I’m sad! Pat me!";
            } else if (energy > 30) {
                dog.src = './assets/images/hungry3_g.jpg';
                statusMessage.textContent = " I’m hungry! Hurry up and feed me!";
            } else {
                dog.src = './assets/images/sleep4_b.jpg';
                statusMessage.textContent = "I’m tired and sleeping!";
            }
        }

        playButton.onclick = function() {
            if (energy > 0) {
                energy -= 10;
                updateBattery();
            }
        };

        restoreButton.onclick = function() {
            energy = Math.min(100, energy + 100); // Восстанавливает до 100
            updateBattery();
        };

        updateBattery();
    