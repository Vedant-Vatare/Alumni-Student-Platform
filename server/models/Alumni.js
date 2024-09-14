const mongoose = require('mongoose');

const alumniSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String },
    graduationYear: { type: Number },
    degree: { type: String },
    specialization: { type: String },
    employment: [{
        jobTitle: String,
        companyName: String,
        industry: String,
        startDate: Date,
        endDate: Date,
    }],
    skills: [{ type: String }],
    engagement: {
        mentorshipStatus: { type: String, enum: ['Available', 'Not Available'], default: 'Not Available' },
        preferredCommunication: { type: String, enum: ['Email', 'Phone', 'Chat'], default: 'Email' },
        availability: String,
    }
});

module.exports = mongoose.model('Alumni', alumniSchema);
