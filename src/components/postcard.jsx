import React from "react";
import LikeButton from "./likebutton";

function PostCard({ username, profilePicture, content }) {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <img src={profilePicture} alt="Profile" style={styles.profilePicture} />
        <span style={styles.username}>{username}</span>
      </div>
      <p style={styles.content}>{content}</p>
      <LikeButton />
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "15px",
    margin: "10px 0",
    backgroundColor: "#fff",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  header: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  profilePicture: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    marginRight: "10px",
  },
  username: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  content: {
    fontSize: "14px",
    color: "#555",
  },
};

export default PostCard;
