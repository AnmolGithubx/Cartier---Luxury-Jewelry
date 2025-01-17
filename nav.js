// Async image loading
async function loadImageAsync(imageUrl, imgElement) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      imgElement.src = imageUrl;
      resolve();
    };
    img.onerror = (err) => reject(err);
  });
}

// DOMContentLoaded event to start loading
document.addEventListener("DOMContentLoaded", async () => {
  const logoImg = document.getElementById("logoImg");
  const openNav = document.getElementById("openNav");

  try {
    // Load logo image asynchronously
    await loadImageAsync("IMG-20240813-WA0019_1_-transformed.png", logoImg);
    console.log("Logo image loaded successfully");
  } catch (error) {
    console.error("Failed to load logo image", error);
  }
});
