<div id="aboutUs" v-cloak>
<head>
  <!-- other head tags -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
</head>
<div class="about-us-page">
    <!-- Sticky Header -->
    <div class="header">
      <span class="header-icon" @click="goBack">
        <i class="fas fa-arrow-left"></i>
      </span>
      <h1 class="header-title">About Us</h1>
    </div>

<div class="content">
    <!-- Contact Us Section -->
    <h2 class="section-title">Contact Us</h2>
    <div class="contact-card">
      <h3>SBT Gold Shop</h3>
      <p>0943218765</p>
      <p>info@sbt.com.mm</p>
      <p>No(1120), Shwe Bone Thar Street, Pabedan Tsp</p>
      <p>Yangon, Myanmar</p>
    </div>

    <!-- Terms -->
    <h2 class="section-title">Terms and Conditions</h2>
    <div class="link-card" @click="viewTerms">
      <span>View Terms and Conditions</span>
      <span class="arrow-icon">
        <i class="fas fa-chevron-right"></i>
      </span>
    </div>

    <!-- FAQ -->
    <h2 class="section-title">FAQ</h2>
    <div
      class="faq-item"
      v-for="(faq, index) in faqs"
      :key="index"
      :class="{ open: faq.open }"
      @click="toggleFaq(index)"
    >
      <div class="faq-question">
        <span>{{ faq.question }}</span>
        <span class="arrow-icon">
          <i
            :class="['fas', faq.open ? 'fa-chevron-up' : 'fa-chevron-down']"
          ></i>
        </span>
      </div>
      <div class="faq-answer">
        <p>{{ faq.answer }}</p>
      </div>
    </div>
  </div>
</div>
</div>