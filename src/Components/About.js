import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <div className="content">
                <h1 className="about-title">About ML</h1>
                <p className="about-text">
                Machine Learning is a rapidly evolving field that empower computers to learn from data, recognize patterns, and make decisions with minimal human intervention. These technologies are reshaping industries, enhancing efficiency, and driving innovation.
                
                Artificial Intelligence (AI) and Machine Learning (ML) are interconnected fields aimed at developing systems that can perform tasks typically requiring human intelligence.

AI encompasses the broader concept of machines carrying out smart tasks such as problem-solving, natural language understanding, pattern recognition, and decision-making.


                </p>
                <p className="about-text">
                Machine Learning, a subset of Artificial Intelligence, focuses specifically on creating algorithms that enable computers to learn from and make predictions based on data without being explicitly programmed for each task.

Together, AI and ML are pivotal in advancing applications across various sectors, including healthcare, finance, autonomous vehicles, and personalized recommendations.
                </p>
                <div className="animated-line"></div>
            </div>
            <div className="days-section">
                <div className="day">
                    <div className="about-circle">Day 1</div>
                    <p className="day-description">
                    Day 1 introduced the fundamentals of Artificial Intelligence and Machine Learning, exploring key concepts and real-world applications, setting a strong foundation for further learning. This SAE workshop offers an immersive journey into Artificial Intelligence and Machine Learning over two insightful days. Participants will start with essential Python programming skills, progressing to fundamental concepts in AI and ML. 

By the end of the day, participants will have a solid understanding of basic AI/ML principles and how they apply to real-world problems.
                </p>
                </div>
                <div className="line" />
                <div className="day">
                    <div className="about-circle">Day 2</div>
                    <p className="day-description">
                    Day 2 brings hands-on training in Convolutional Neural Networks (CNN) and practical implementation of machine learning models, capped with an introduction to the YOLO object detection application. With expert-led sessions, real-time doubt resolution, and interactive quizzes, this workshop ensures a thorough, beginner-friendly understanding of AI and ML essentials. Perfectly structured for newcomers, it’s a valuable step towards mastering these transformative technologies. Thus concluding our 2 day workshop
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
