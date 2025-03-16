
import React from 'react'

const Category = () => {
    return (
        <>
            <section className=" text-center section-bg ">
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
                        <div
                            className="category-card"
                            style={{ backgroundImage: 'url("assets/image/Weight Loss.jfif")' }}
                        >
                            <div className="category-overlay" />
                            <div className="category-text">Weight Loss</div>
                        </div>
                        <div
                            className="category-card"
                            style={{ backgroundImage: 'url("assets/image/Health.jpg")' }}
                        >
                            <div className="category-overlay" />
                            <div className="category-text">Sexual Health</div>
                        </div>
                        <div
                            className="category-card"
                            style={{ backgroundImage: 'url("assets/image/brain-health.jfif")' }}
                        >
                            <div className="category-overlay" />
                            <div className="category-text">Brain Health</div>
                        </div>
                        <div
                            className="category-card"
                            style={{ backgroundImage: 'url("assets/image/Testosterone.jfif")' }}
                        >
                            <div className="category-overlay" />
                            <div className="category-text">Testosterone HRT</div>
                        </div>
                        <div
                            className="category-card"
                            style={{
                                backgroundImage: 'url("assets/image/athletic-performance.jfif")'
                            }}
                        >
                            <div className="category-overlay" />
                            <div className="category-text">Athletic Performance</div>
                        </div>
                        <div
                            className="category-card"
                            style={{ backgroundImage: 'url("assets/image/beauty-hair-loss.jpg")' }}
                        >
                            <div className="category-overlay" />
                            <div className="category-text">Beauty and Hair Loss</div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Category


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
