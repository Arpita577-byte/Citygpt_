import { Complaint, CommunityPost, RewardPointInfo, CityNotification, Prediction } from "./types";

export const MOCK_COMPLAINTS: Complaint[] = [
  {
    id: "COMP-101",
    category: "waste",
    title: "Garbage Overflow behind Modern Public School",
    description: "Huge pile of trash left uncleared behind the school boundary wall. Attracting stray dogs and children are exposed to bad smell.",
    imageUrl: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=600&auto=format&fit=crop&q=60",
    beforePhoto: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=600&auto=format&fit=crop&q=60",
    afterPhoto: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=600&auto=format&fit=crop&q=60",
    priority: "high",
    lat: 19.0760,
    lng: 72.8777,
    locationDescription: "Behind boundary wall, Modern Public School Road, Ward 3",
    assignedTeam: "Zone 3 Sanitation Patrol",
    status: "resolved",
    votes: 45,
    verified: true,
    eta: "Completed (25 min)",
    dateReported: "2026-06-17T14:30:00Z"
  },
  {
    id: "COMP-102",
    category: "water",
    title: "Major Water Pipe Leakage near Railway Station",
    description: "Drinking water pipeline fractured at Sector 4 Junction. Water has been spraying out onto the road for over 6 hours triggering local flood.",
    imageUrl: "https://images.unsplash.com/photo-1542013936693-8848e5744a70?w=600&auto=format&fit=crop&q=60",
    beforePhoto: "https://images.unsplash.com/photo-1542013936693-8848e5744a70?w=600&auto=format&fit=crop&q=60",
    priority: "high",
    lat: 19.0820,
    lng: 72.8810,
    locationDescription: "Under Station Walkway flyover, Ward 3",
    assignedTeam: "Hydraulics Division Ward 3",
    status: "working",
    votes: 82,
    verified: false,
    eta: "45 mins",
    dateReported: "2026-06-18T05:15:00Z"
  },
  {
    id: "COMP-103",
    category: "pothole",
    title: "Dangerous Potholes on Main flyover heading east",
    description: "Two very deep potholes right after the flyover ascent. Cars are sudden braking and dynamic swerving causing near-miss accidents.",
    imageUrl: "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?w=600&auto=format&fit=crop&q=60",
    beforePhoto: "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?w=600&auto=format&fit=crop&q=60",
    priority: "high",
    lat: 19.0680,
    lng: 72.8730,
    locationDescription: "Eastbound lane, Western Expressway Flyover, Ward 5",
    assignedTeam: "Pavement & Road Maintenance Unit 2",
    status: "assigned",
    votes: 110,
    verified: false,
    eta: "2 hrs",
    dateReported: "2026-06-18T06:40:00Z"
  },
  {
    id: "COMP-104",
    category: "lighting",
    title: "Complete Streetlight Failure along Central Avenue",
    description: "Five consecutive poles are dark. The entire stretch has zero visibility, making pedestrians extremely vulnerable.",
    imageUrl: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=600&auto=format&fit=crop&q=60",
    beforePhoto: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=600&auto=format&fit=crop&q=60",
    priority: "medium",
    lat: 19.0790,
    lng: 72.8655,
    locationDescription: "Central Avenue from Lane 4 intersections, Ward 1",
    assignedTeam: "Municipal Electrical Grid Repair Team",
    status: "reported",
    votes: 12,
    verified: false,
    eta: "5 hrs",
    dateReported: "2026-06-18T07:15:00Z"
  }
];

export const MOCK_COMMUNITY_POSTS: CommunityPost[] = [
  {
    id: "POST-001",
    category: "water",
    title: "Water flooded near Station area - please vote to raise priority!",
    description: "It has flooded again! Station access is completely blocked due to the pipe breakage. Please upvote this so the AI routing elevates priority for repair workers.",
    author: "Arpita Maatta",
    imageUrl: "https://images.unsplash.com/photo-1542013936693-8848e5744a70?w=600&auto=format&fit=crop&q=60",
    date: "2026-06-18T05:25:00Z",
    upvotes: 82,
    hasVotedByMe: true,
    complaintId: "COMP-102"
  },
  {
    id: "POST-002",
    category: "pothole",
    title: "Dangerous descent pothole Western Expressway",
    description: "Be careful everyone, especially motorcyclists. Hit it at 40km/h and almost lost balance.",
    author: "Rahul Sharma",
    imageUrl: "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?w=600&auto=format&fit=crop&q=60",
    date: "2026-06-18T06:55:00Z",
    upvotes: 110,
    hasVotedByMe: false,
    complaintId: "COMP-103"
  }
];

export const MOCK_REWARDS: RewardPointInfo = {
  totalGreenPoints: 450,
  badges: [
    { id: "badge-1", title: "Smart Citizen", iconName: "Award", description: "Reported 5 valid city issues", unlocked: true },
    { id: "badge-2", title: "Eco Hero", iconName: "TreePine", description: "Removed 100kg of localized garbage footprint", unlocked: true },
    { id: "badge-3", title: "City Guardian", iconName: "ShieldAlert", description: "Verified before/after evidence photos", unlocked: false },
  ],
  history: [
    { id: "rw-1", description: "Successful Waste Detection Validation", points: 50, date: "2026-06-18T06:00:00Z" },
    { id: "rw-2", description: "Pothole Verification Upvote", points: 20, date: "2026-06-17T11:00:00Z" },
    { id: "rw-3", description: "Weekly Active Smart citizen streak", points: 100, date: "2026-06-15T09:00:00Z" }
  ],
  leaderboard: [
    { name: "Priya Patel", points: 850, rank: 1 },
    { name: "Arpita Maatta (You)", points: 450, rank: 2, isSelf: true },
    { name: "Rohit Deshmukh", points: 380, rank: 3 },
    { name: "Amit Saini", points: 310, rank: 4 },
    { name: "Suresh Pillai", points: 250, rank: 5 }
  ]
};

export const MOCK_NOTIFICATIONS: CityNotification[] = [
  {
    id: "NOTIF-01",
    type: "success",
    title: "Earned 50 Green Points! 🏆",
    message: "Your reported garbage issue COMP-101 has been marked resolved. Before & After verified by AI.",
    time: "2 hours ago",
    read: false
  },
  {
    id: "NOTIF-02",
    type: "warning",
    title: "Urgent: Water pipeline failure Ward 3",
    message: "Hydraulics team has isolated the main node near Station Flyover. Mild pressure loss spans Sector 4.",
    time: "1 hour ago",
    read: false
  }
];

export const MOCK_PREDICTIONS: Prediction[] = [
  {
    id: "PRED-1",
    title: "Water Pipeline Rupture Risk",
    ward: "Ward 3",
    probability: 85,
    expectedWithin: "12 Days",
    recommendedAction: "Pre-emptively clamp connection junctions around Sector 4 Water Station.",
    category: "water",
    lat: 19.0760,
    lng: 72.8890
  },
  {
    id: "PRED-2",
    title: "Sewer Blockage Trigger Point",
    ward: "Ward 4",
    probability: 72,
    expectedWithin: "18 Days",
    recommendedAction: "Flush Central Outflow storm drain before onset of localized monsoonal cloudburst.",
    category: "waste",
    lat: 19.0850,
    lng: 72.8680
  },
  {
    id: "PRED-3",
    title: "Streetlight Circuit Burnout",
    ward: "Ward 1",
    probability: 60,
    expectedWithin: "25 Days",
    recommendedAction: "Deploy substation diagnostics team to examine overhead transformer grid.",
    category: "lighting",
    lat: 19.0720,
    lng: 72.8590
  }
];
