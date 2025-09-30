'use client';

import { useState, useEffect } from 'react';

interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
  budget?: string;
  createdAt: string;
  read: boolean;
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image?: string;
  published: boolean;
  createdAt: string;
  tags: string[];
  readTime: number;
}

export default function AdminPanel() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [activeTab, setActiveTab] = useState('contacts');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContacts();
    fetchBlogPosts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch('/api/contact');
      if (response.ok) {
        const data = await response.json();
        setContacts(data);
      }
    } catch (error) {
      console.error('Error fetching contacts:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchBlogPosts = async () => {
    try {
      const response = await fetch('/api/blog');
      if (response.ok) {
        const data = await response.json();
        setBlogPosts(data);
      }
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800 rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-white mb-8">Admin Panel</h1>
          
          {/* Tab Navigation */}
          <div className="flex space-x-4 mb-8">
            <button
              onClick={() => setActiveTab('contacts')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'contacts'
                  ? 'bg-pink-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Contact Messages ({contacts.length})
            </button>
            <button
              onClick={() => setActiveTab('blog')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'blog'
                  ? 'bg-pink-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Blog Posts ({blogPosts.length})
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'analytics'
                  ? 'bg-pink-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Analytics
            </button>
          </div>

          {/* Contact Messages */}
          {activeTab === 'contacts' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Contact Messages</h2>
              {loading ? (
                <div className="text-gray-300">Loading...</div>
              ) : contacts.length === 0 ? (
                <div className="text-gray-300">No contact messages yet.</div>
              ) : (
                <div className="space-y-4">
                  {contacts.map((contact) => (
                    <div key={contact.id} className="bg-gray-700 rounded-lg p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-white">{contact.name}</h3>
                          <p className="text-gray-300">{contact.email}</p>
                          {contact.budget && (
                            <p className="text-pink-400">Budget: {contact.budget}</p>
                          )}
                        </div>
                        <span className="text-sm text-gray-400">
                          {new Date(contact.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-gray-300 whitespace-pre-wrap">{contact.message}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Blog Posts */}
          {activeTab === 'blog' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Blog Posts</h2>
              <div className="space-y-4">
                {blogPosts.map((post) => (
                  <div key={post.id} className="bg-gray-700 rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{post.title}</h3>
                        <p className="text-gray-300">{post.excerpt}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className={`px-2 py-1 rounded text-sm ${
                            post.published ? 'bg-green-600' : 'bg-gray-600'
                          }`}>
                            {post.published ? 'Published' : 'Draft'}
                          </span>
                          <span className="text-gray-400">{post.readTime} min read</span>
                        </div>
                      </div>
                      <span className="text-sm text-gray-400">
                        {new Date(post.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="bg-pink-600 text-white px-2 py-1 rounded text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Analytics */}
          {activeTab === 'analytics' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Portfolio Analytics</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-700 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">{contacts.length}</div>
                  <div className="text-gray-300">Total Contact Messages</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">{blogPosts.length}</div>
                  <div className="text-gray-300">Blog Posts</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">
                    {blogPosts.filter(post => post.published).length}
                  </div>
                  <div className="text-gray-300">Published Posts</div>
                </div>
              </div>
              
              <div className="mt-8 bg-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  {contacts.slice(0, 5).map((contact) => (
                    <div key={contact.id} className="flex justify-between items-center">
                      <span className="text-gray-300">New message from {contact.name}</span>
                      <span className="text-gray-400 text-sm">
                        {new Date(contact.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}