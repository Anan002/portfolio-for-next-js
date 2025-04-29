"use client";

import { useEffect, useState } from "react";

interface CommentSectionProps {
  blogId: string;
}

export default function CommentSection({ blogId }: CommentSectionProps) {
  const [form, setForm] = useState({ name: "", email: "", content: "" });
  const [comments, setComments] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchComments();
  }, [blogId]);

  const fetchComments = async () => {
    try {
      const res = await fetch(`/api/comments?blogId=${blogId}`);
      const data = await res.json();
      setComments(data);
    } catch (error) {
      console.error("Failed to fetch comments:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = form.name.trim();
    const trimmedEmail = form.email.trim();
    const trimmedContent = form.content.trim();

    if (!trimmedName || !trimmedEmail || !trimmedContent) {
      alert("Please fill out all fields properly.");
      return;
    }

    setLoading(true);

    try {
      await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, blogId }),
      });

      setForm({ name: "", email: "", content: "" });
      await fetchComments();
    } catch (error) {
      console.error("Failed to post comment:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginTop: "30px", color: "white" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          marginBottom: "30px",
          padding: "20px",
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
        }}
      >
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          style={{
            padding: "12px",
            background: "rgba(255, 255, 255, 0.1)",
            border: "1px solid #444",
            borderRadius: "8px",
            color: "white",
            fontSize: "16px",
            transition: "all 0.3s ease",
          }}
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          style={{
            padding: "12px",
            background: "rgba(255, 255, 255, 0.1)",
            border: "1px solid #444",
            borderRadius: "8px",
            color: "white",
            fontSize: "16px",
            transition: "all 0.3s ease",
          }}
        />
        <textarea
          placeholder="Write your comment..."
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          required
          rows={4}
          style={{
            padding: "12px",
            background: "rgba(255, 255, 255, 0.1)",
            border: "1px solid #444",
            borderRadius: "8px",
            color: "white",
            fontSize: "16px",
            transition: "all 0.3s ease",
          }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "12px",
            background: loading ? "#333" : "#0066cc",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            transition: "background 0.3s ease",
          }}
        >
          {loading ? "Posting..." : "Post Comment"}
        </button>
      </form>
  
      <div style={{ marginTop: "20px" }}>
        <h3>Comments ({comments.length})</h3>
        {comments.length === 0 && <p>No comments yet. Be the first to comment!</p>}
  
        <div
          style={{
            maxHeight: comments.length > 3 ? "250px" : "auto",
            overflowY: comments.length > 3 ? "auto" : "visible",
            paddingRight: "10px",
          }}
        >
          {comments.map((comment) => (
            <div
              key={comment.id}
              style={{
                marginBottom: "20px",
                padding: "15px",
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                transition: "all 0.3s ease",
              }}
            >
              <p style={{ fontSize: "18px", margin: "0" }}>
                <strong>{comment.name}</strong> ({new Date(comment.createdAt).toLocaleDateString()})
              </p>
              <p>{comment.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
}
