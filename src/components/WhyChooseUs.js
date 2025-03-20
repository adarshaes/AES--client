import React from "react";

// Importing React Icons (you can replace these with specific icons you find suitable)
import { FaChalkboardTeacher, FaUsers, FaShieldAlt, FaTrophy, FaHandHoldingHeart, FaBuilding } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <section id="section4" className="section" style={styles.section}>
      <h2 style={styles.title}>Why Choose Us</h2>
      <p style={styles.subtitle}>Reasons to choose our school.</p>
      
      <div style={styles.reasonsContainer}>
        {/* Reason 1 */}
        <div style={styles.reasonCard}>
          <FaChalkboardTeacher style={styles.icon} />
          <h3 style={styles.reasonTitle}>Experienced and Quality Teaching</h3>
          <p style={styles.reasonText}>
            We offer creative and technology-focused learning activities, helping students gain life skills and knowledge.
          </p>
        </div>

        {/* Reason 2 */}
        <div style={styles.reasonCard}>
          <FaUsers style={styles.icon} />
          <h3 style={styles.reasonTitle}>A Strong Community</h3>
          <p style={styles.reasonText}>
            Our school fosters a community of students, parents, and educators working together to build a better future.
          </p>
        </div>

        {/* Reason 3 */}
        <div style={styles.reasonCard}>
          <FaShieldAlt style={styles.icon} />
          <h3 style={styles.reasonTitle}>Safe and Supportive Environment</h3>
          <p style={styles.reasonText}>
            We provide a safe and friendly environment, where students can learn and grow with confidence.
          </p>
        </div>

        {/* Reason 4 */}
        <div style={styles.reasonCard}>
          <FaTrophy style={styles.icon} />
          <h3 style={styles.reasonTitle}>Achievements and Recognition</h3>
          <p style={styles.reasonText}>
            Our students excel in various subjects, and we have consistently achieved excellent results in national exams.
          </p>
        </div>

        {/* Reason 5 */}
        <div style={styles.reasonCard}>
          <FaHandHoldingHeart style={styles.icon} />
          <h3 style={styles.reasonTitle}>Holistic Development</h3>
          <p style={styles.reasonText}>
            We focus on the overall development of students, offering extracurricular activities like dance, music, and taekwondo.
          </p>
        </div>

        {/* Reason 6 */}
        <div style={styles.reasonCard}>
          <FaBuilding style={styles.icon} />
          <h3 style={styles.reasonTitle}>State-of-the-Art Infrastructure</h3>
          <p style={styles.reasonText}>
            Our modern and spacious facilities, including a dedicated computer lab, sports ground, and a clean environment, enhance the learning experience.
          </p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    marginTop: "50px", // Added some gap from the top
  },
  title: {
    color: "#00204a",
    fontSize: "36px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "10px",
  },
  subtitle: {
    textAlign: "center",
    fontSize: "18px",
    color: "#555",
    marginBottom: "20px",
  },
  reasonsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
    marginTop: "20px",
    padding: "0 10px",
  },
  reasonCard: {
    background: "#f4f4f4",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  reasonTitle: {
    color: "#00204a",
    fontSize: "24px",
    fontWeight: "bold",
    margin: "10px 0",
  },
  reasonText: {
    color: "#555",
    fontSize: "16px",
    lineHeight: "1.5",
  },
  icon: {
    fontSize: "40px",
    color: "#00204a",
  },
};

export default WhyChooseUs;
