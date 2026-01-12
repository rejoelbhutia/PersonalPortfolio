import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default leafet markers in React
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);


  const position = [27.257170,88.273844]; //27.257170, 88.273844

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Something went wrong.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to connect to server.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-8 border-b border-border pb-4">Contact Me</h2>

      {/* Map Section */}
      <div className="mb-12 h-[300px] md:h-[400px] rounded-xl overflow-hidden border border-border z-0 relative">
         <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                 I am here! <br /> Come say hello.
                </Popup>
            </Marker>
         </MapContainer>
      </div>

      <div className=" gap-8">
  

        {/* Contact Form */}
        <div className="lg:col-span-2 bg-sidebar p-8 rounded-2xl border border-border">
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
            
            {status.message && (
                <div className={`p-4 rounded-lg mb-6 ${status.type === 'success' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                    {status.message}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    />
                </div>
                <div>
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <Send size={18} />
                    {loading ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
