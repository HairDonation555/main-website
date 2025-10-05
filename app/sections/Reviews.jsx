"use client"
import React from 'react';
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Priya Grandhi",
    text: "The process was totally smooth. Felt really happy after donating the hair and the team HairDonation555 is doing an excellent work by making the wig and helping the cancer warriors.",
    rating: 5,
  },
  {
    name: "Kajal Chavan",
    text: "A Heartfelt Thank You to the Hair Donation Team ❤️ Donating hair is such an emotional and meaningful experience and the team made it so smooth, respectful, and inspiring. Your dedication to spreading smiles and restoring confidence among cancer patients is truly commendable. 💫 Thank you for being the bridge between donors and hope. You are changing lives, one strand at a time. 💇‍♀️💖 Keep up the amazing work! 🌟",
    rating: 5,
  },
  {
    name: "Suvarna Krishnan",
    text: "I'm so grateful to have found hairdonation555 via IG. Contacted you only to donate my hair that will be shaved elsewhere. But you were so gracious enough to guide me through the whole process of removing and packing the hair properly, up to collecting it from my place. Everything became so much easier. Thank you. Also many thanks for your kind and encouraging words to someone like me shaving for the first time. Keep up your noble work hairdonation555!",
    rating: 5,
  },
  {
    name: "Pavithra Krish",
    text: "My hair donation experience was good. They communicate everything clearly and arrange for pickup. I would recommend people to donate hair, it gives genuine satisfaction.",
    rating: 5,
  },
  {
    name: "Anupama Negi",
    text: "It was the very first time that I donated my hair to someone, and I am very happy after donating my hair to HD555 NGO. Their services are very good and I feel very happy and new after donating my hairs.....😊",
    rating: 5,
  },
  {
    name: "Siri Jessy",
    text: "I've cut my hair 15 inches.And of course it's a smooth process.My hair was picked  soon after 2 days.And I've got the certificate too thank you😍🥰❤️",
    rating: 5,
  }
];

function Reviews() {
  return (
    <div id="reviews" className="relative w-full py-12 px-4 md:px-12 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-12 animate-fade-in-reviews">
        <h2 className="text-3xl md:text-5xl font-bold text-black">What People Say</h2>
        <div className="w-24 h-1 bg-primary mx-auto mt-2"></div>
      </div>

      {/* Review Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 flex flex-col gap-4 hover:scale-105 transition-transform duration-300 animate-fade-in-reviews-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Reviewer */}
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold text-black">{review.name}</h3>
              <div className="flex text-yellow-500">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>

            {/* Review Text */}
            <p className="text-gray-700 italic">"{review.text}"</p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-12 flex justify-center animate-fade-in-reviews-cta">
        <a
          href="https://www.google.com/maps/place/Hair+Donation/@15.4999205,80.0467724,17z/data=!4m14!1m5!8m4!1e1!2s108048886842683641227!3m1!1e1!3m7!1s0x3a4b011cd72eb6c7:0x96e47f3af7fa542b!8m2!3d15.4999205!4d80.0493473!9m1!1b1!16s%2Fg%2F11wfqz7_x_?entry=ttu&g_ep=EgoyMDI1MDgzMC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-primary px-6 py-3 text-lg font-bold text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-primary-dark"
        >
          <span className="absolute inset-0 rounded-xl bg-white opacity-10 transition-opacity duration-300 group-hover:opacity-20"></span>
          <span className="relative z-10">Read More Reviews</span>
        </a>


    
    </div>

      <style jsx>{`
        @keyframes fadeInReviews {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInReviewsCard {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInReviewsCta {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-reviews {
          animation: fadeInReviews 0.6s ease-out forwards;
        }

        .animate-fade-in-reviews-card {
          animation: fadeInReviewsCard 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-reviews-cta {
          animation: fadeInReviewsCta 0.8s ease-out forwards;
          animation-delay: 0.8s;
          opacity: 0;
        }
      `}</style>
</div>
  );
}

export default Reviews;