
import React, { useState, useEffect } from 'react';

const categories = [
  { name: "Weight Loss", image: "assets/image/athletic-performance.jfif" },
  { name: "Sexual Health", image: "assets/image/Health.jpg" },
  { name: "Brain Health", image: "assets/image/brain-health.jfif" },
  { name: "Testosterone HRT", image: "assets/image/Testosterone.jfif" },
  { name: "Athletic Performance", image: "assets/image/athletic-performance.jfif" },
  { name: "Beauty and Hair Loss", image: "assets/image/beauty-hair-loss.jpg" }
];

const ShopByCategory = () => {
  return (
    <section className="text-center section-bg">
      <div className="container">
        <div className="search-bar">
          <input
            type="text"
            className="form-control"
            placeholder="Search by product/treatment"
          />
          <i className="fas fa-search search-icon" />
        </div>
        <h2 className="mt-4">
          Shop By <span style={{ color: "#f4c430" }}>Category</span>
        </h2>
        <div className="category-container">
          {categories.map((category, index) => (
            <div
              key={index}
              className="category-card"
              style={{ backgroundImage: `url(${category.image})` }}
            >
              <div className="category-overlay" />
              <div className="category-text">{category.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;



// import React, { useEffect, useState } from 'react';

// const Category = () => {
//     const [categories, setCategories] = useState([]);

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/posts') 
//             .then((response) => response.json())
//             .then((data) => {
//                 const categoryData = data.slice(0, 6).map((post) => ({
//                     title: post.title,
//                     image: `https://via.placeholder.com/150/0000FF/808080?text=${post.id}`, 
//                 }));
//                 setCategories(categoryData); 
//             })
//             .catch((error) => {
//                 console.error('Error fetching categories:', error);
            
//             });
//     }, []);

//     const fallbackCategories = [
//         {
//             title: 'Weight Loss',
//             image: 'assets/image/Weight Loss.jfif',
//         },
//         {
//             title: 'Sexual Health',
//             image: 'assets/image/Health.jpg',
//         },
//         {
//             title: 'Brain Health',
//             image: 'assets/image/brain-health.jfif',
//         },
//         {
//             title: 'Testosterone HRT',
//             image: 'assets/image/Testosterone.jfif',
//         },
//         {
//             title: 'Athletic Performance',
//             image: 'assets/image/athletic-performance.jfif',
//         },
//         {
//             title: 'Beauty and Hair Loss',
//             image: 'assets/image/beauty-hair-loss.jpg',
//         },
//     ];

//     const categoriesToDisplay = categories.length > 0 ? categories : fallbackCategories;

//     return (
//         <>
//             <section className="text-center section-bg">
//                 <div className="container">
//                     <div className="search-bar">
//                         <input
//                             type="text"
//                             className="form-control"
//                             placeholder="Search by product/treatment"
//                         />
//                         <i className="fas fa-search search-icon" />
//                     </div>
//                     <h2 className="mt-4">
//                         Shop By <span style={{ color: "#f4c430" }}>Category</span>
//                     </h2>
//                     <div className="category-container">
//                         {categoriesToDisplay.map((category, index) => (
//                             <div
//                                 key={index} 
//                                 className="category-card"
//                                 style={{ backgroundImage: `url("${category.image}")` }}
//                             >
//                                 <div className="category-overlay" />
//                                 <div className="category-text">{category.title}</div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default Category;
