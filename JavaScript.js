let currentImageIndex = 0; // Track current image index

        // Function to open the modal and show the clicked image
        function openModal(imageIndex) {
            var modal = document.getElementById("myModal");
            var modalImage = document.getElementById("modalImage");

            currentImageIndex = imageIndex;
            var imageSrc = document.querySelectorAll(".gallery-item")[imageIndex].querySelector(".thumbnail").src;

            modal.style.display = "flex";
            modalImage.src = imageSrc;

            setTimeout(function() {
                modalImage.classList.add("visible");
            }, 50);
        }

        // Function to close the modal
        function closeModal() {
            var modal = document.getElementById("myModal");
            var modalImage = document.getElementById("modalImage");

            modal.style.display = "none";
            modalImage.classList.remove("visible");
        }

        // Function to navigate between images in the modal
        function navigateModal(direction) {
            currentImageIndex += direction;

            if (currentImageIndex < 0) currentImageIndex = 8;  // Loop back to the last image
            if (currentImageIndex > 8) currentImageIndex = 0;  // Loop back to the first image

            var imageSrc = document.querySelectorAll(".gallery-item")[currentImageIndex].querySelector(".thumbnail").src;
            var modalImage = document.getElementById("modalImage");

            modalImage.classList.remove("visible");
            setTimeout(function() {
                modalImage.src = imageSrc;
                modalImage.classList.add("visible");
            }, 300);
        }

        // Close modal if clicking outside of the modal content
        window.onclick = function(event) {
            var modal = document.getElementById("myModal");
            if (event.target === modal) {
                closeModal();
            }
        }