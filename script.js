// ============================================
// LOCATION DATABASE WITH METADATA
// ============================================

const citiesDatabase = [
    // METROS
    { id: 1, name: "Delhi", state: "Delhi", type: "Metro", latitude: 28.7041, longitude: 77.1025, popular_destinations: ["Mumbai", "Bangalore", "Jaipur", "Agra", "Chandigarh"] },
    { id: 2, name: "Mumbai", state: "Maharashtra", type: "Metro", latitude: 19.0760, longitude: 72.8777, popular_destinations: ["Delhi", "Bangalore", "Pune", "Surat", "Goa"] },
    { id: 3, name: "Bangalore", state: "Karnataka", type: "Metro", latitude: 12.9716, longitude: 77.5946, popular_destinations: ["Mumbai", "Chennai", "Hyderabad", "Pune", "Goa"] },
    { id: 4, name: "Kolkata", state: "West Bengal", type: "Metro", latitude: 22.5726, longitude: 88.3639, popular_destinations: ["Delhi", "Mumbai", "Patna", "Guwahati", "Darjeeling"] },
    { id: 5, name: "Chennai", state: "Tamil Nadu", type: "Metro", latitude: 13.0827, longitude: 80.2707, popular_destinations: ["Bangalore", "Coimbatore", "Kochi", "Hyderabad", "Puducherry"] },
    { id: 6, name: "Hyderabad", state: "Telangana", type: "Metro", latitude: 17.3850, longitude: 78.4867, popular_destinations: ["Bangalore", "Mumbai", "Chennai", "Pune", "Nagpur"] },
    { id: 7, name: "Pune", state: "Maharashtra", type: "Metro", latitude: 18.5204, longitude: 73.8567, popular_destinations: ["Mumbai", "Bangalore", "Hyderabad", "Nashik", "Aurangabad"] },
    { id: 8, name: "Ahmedabad", state: "Gujarat", type: "Metro", latitude: 23.0225, longitude: 72.5714, popular_destinations: ["Delhi", "Mumbai", "Surat", "Jaipur", "Rajkot"] },
    
    // TIER-1
    { id: 9, name: "Jaipur", state: "Rajasthan", type: "Tier-1", latitude: 26.9124, longitude: 75.7873, popular_destinations: ["Delhi", "Agra", "Pushkar", "Udaipur", "Bikaner"] },
    { id: 10, name: "Lucknow", state: "Uttar Pradesh", type: "Tier-1", latitude: 26.8467, longitude: 80.9462, popular_destinations: ["Delhi", "Kanpur", "Varanasi", "Agra", "Allahabad"] },
    { id: 11, name: "Kanpur", state: "Uttar Pradesh", type: "Tier-1", latitude: 26.4499, longitude: 80.3319, popular_destinations: ["Lucknow", "Delhi", "Varanasi", "Allahabad", "Agra"] },
    { id: 12, name: "Surat", state: "Gujarat", type: "Tier-1", latitude: 21.1707, longitude: 72.8311, popular_destinations: ["Ahmedabad", "Mumbai", "Rajkot", "Vadodara", "Daman"] },
    { id: 13, name: "Indore", state: "Madhya Pradesh", type: "Tier-1", latitude: 22.7196, longitude: 75.8577, popular_destinations: ["Bhopal", "Mumbai", "Pune", "Ujjain", "Mandu"] },
    { id: 14, name: "Bhopal", state: "Madhya Pradesh", type: "Tier-1", latitude: 23.1815, longitude: 79.9864, popular_destinations: ["Indore", "Delhi", "Jabalpur", "Gwalior", "Ujjain"] },
    { id: 15, name: "Nagpur", state: "Maharashtra", type: "Tier-1", latitude: 21.1458, longitude: 79.0882, popular_destinations: ["Mumbai", "Hyderabad", "Bangalore", "Raipur", "Aurangabad"] },
    { id: 16, name: "Visakhapatnam", state: "Andhra Pradesh", type: "Tier-1", latitude: 17.6869, longitude: 83.2185, popular_destinations: ["Hyderabad", "Chennai", "Bangalore", "Vijayawada", "Tirupati"] },
    
    // TIER-2
    { id: 17, name: "Chandigarh", state: "Chandigarh", type: "Tier-2", latitude: 30.7333, longitude: 76.7794, popular_destinations: ["Delhi", "Shimla", "Amritsar", "Manali", "Mohali"] },
    { id: 18, name: "Kochi", state: "Kerala", type: "Tier-2", latitude: 9.9312, longitude: 76.2673, popular_destinations: ["Bangalore", "Chennai", "Thiruvananthapuram", "Munnar", "Alleppey"] },
    { id: 19, name: "Coimbatore", state: "Tamil Nadu", type: "Tier-2", latitude: 11.0065, longitude: 76.9566, popular_destinations: ["Chennai", "Bangalore", "Ooty", "Mysore", "Nilgiris"] },
    { id: 20, name: "Agra", state: "Uttar Pradesh", type: "Tier-2", latitude: 27.1767, longitude: 78.0081, popular_destinations: ["Delhi", "Gwalior", "Mathura", "Lucknow", "Fatehpur Sikri"] },
    { id: 21, name: "Vadodara", state: "Gujarat", type: "Tier-2", latitude: 22.3072, longitude: 73.1812, popular_destinations: ["Ahmedabad", "Mumbai", "Surat", "Indore", "Ujjain"] },
    { id: 22, name: "Guwahati", state: "Assam", type: "Tier-2", latitude: 26.1445, longitude: 91.7362, popular_destinations: ["Kolkata", "Shillong", "Darjeeling", "Assam", "Tezpur"] },
    { id: 23, name: "Varanasi", state: "Uttar Pradesh", type: "Tier-2", latitude: 25.3520, longitude: 82.9789, popular_destinations: ["Lucknow", "Delhi", "Allahabad", "Kanpur", "Kathmandu"] },
    { id: 24, name: "Thiruvananthapuram", state: "Kerala", type: "Tier-2", latitude: 8.5241, longitude: 76.9366, popular_destinations: ["Kochi", "Chennai", "Bangalore", "Munnar", "Alleppey"] },
    
    // TIER-3
    { id: 25, name: "Shimla", state: "Himachal Pradesh", type: "Tier-3", latitude: 31.7775, longitude: 77.1577, popular_destinations: ["Delhi", "Chandigarh", "Manali", "Kasol", "Kullu"] },
    { id: 26, name: "Manali", state: "Himachal Pradesh", type: "Tier-3", latitude: 32.2396, longitude: 77.1887, popular_destinations: ["Delhi", "Chandigarh", "Shimla", "Kasol", "Kullu"] },
    { id: 27, name: "Goa", state: "Goa", type: "Tier-3", latitude: 15.2993, longitude: 73.8243, popular_destinations: ["Mumbai", "Bangalore", "Pune", "Panaji", "Margao"] },
    { id: 28, name: "Udaipur", state: "Rajasthan", type: "Tier-3", latitude: 24.5854, longitude: 73.7125, popular_destinations: ["Jaipur", "Delhi", "Ahmedabad", "Chittorgarh", "Pushkar"] },
    { id: 29, name: "Amritsar", state: "Punjab", type: "Tier-3", latitude: 31.6340, longitude: 74.8723, popular_destinations: ["Delhi", "Chandigarh", "Ludhiana", "Pathankot", "Gurdaspur"] },
    { id: 30, name: "Mysore", state: "Karnataka", type: "Tier-3", latitude: 12.2958, longitude: 76.6394, popular_destinations: ["Bangalore", "Chennai", "Coimbatore", "Ooty", "Hassan"] },
];

// ============================================
// DYNAMIC ROUTE DATABASE
// ============================================

function generateRoutes() {
    const routes = [];
    
    const transportProviders = {
        bus: [
            { name: "Express Bus Co", amenities: ["AC", "WiFi", "Meals"] },
            { name: "Comfort Bus", amenities: ["AC", "Reclining Seats", "WiFi"] },
            { name: "Quick Bus", amenities: ["AC", "WiFi"] },
            { name: "Metro Bus", amenities: ["AC", "WiFi", "Meals"] }
        ],
        train: [
            { name: "Indian Railways", amenities: ["Sleeper", "Dining Car", "Bedding"] },
            { name: "South Indian Railways", amenities: ["Sleeper", "Meals"] },
            { name: "Northern Railways", amenities: ["Reserved Seats"] },
            { name: "South Central Railways", amenities: ["Sleeper", "Dining"] }
        ],
        flight: [
            { name: "Air India", amenities: ["Meals", "WiFi", "In-flight Entertainment"] },
            { name: "SpiceJet", amenities: ["Snacks", "In-flight WiFi"] },
            { name: "IndiGo", amenities: ["Snacks"] },
            { name: "GoAir", amenities: ["Meals", "WiFi"] }
        ]
    };

    // Generate routes between major city pairs
    const cityPairs = [
        [0, 1], [0, 2], [0, 9], [1, 2], [1, 6], [2, 5], [2, 19], [5, 19],
        [0, 3], [1, 8], [3, 4], [4, 5], [6, 7], [7, 8], [9, 10], [10, 11]
    ];

    cityPairs.forEach(([fromIdx, toIdx]) => {
        const fromCity = citiesDatabase[fromIdx];
        const toCity = citiesDatabase[toIdx];
        
        const distance = calculateDistance(
            fromCity.latitude, fromCity.longitude,
            toCity.latitude, toCity.longitude
        );

        const providers = [];

        // Add bus option
        const busProvider = transportProviders.bus[Math.floor(Math.random() * transportProviders.bus.length)];
        const busPrice = Math.floor((distance / 100) * 80 + Math.random() * 200);
        providers.push({
            name: busProvider.name,
            type: "bus",
            outbound: {
                departure: formatTime(Math.random() * 24),
                arrival: formatTime(Math.random() * 24),
                duration: formatDuration(distance / 60),
                amenities: busProvider.amenities,
                price: busPrice
            },
            return: {
                departure: formatTime(Math.random() * 24),
                arrival: formatTime(Math.random() * 24),
                duration: formatDuration(distance / 60),
                price: busPrice
            }
        });

        // Add train option
        const trainProvider = transportProviders.train[Math.floor(Math.random() * transportProviders.train.length)];
        const trainPrice = Math.floor((distance / 100) * 120 + Math.random() * 300);
        providers.push({
            name: trainProvider.name,
            type: "train",
            outbound: {
                departure: formatTime(Math.random() * 24),
                arrival: formatTime(Math.random() * 24),
                duration: formatDuration(distance / 80),
                amenities: trainProvider.amenities,
                price: trainPrice
            },
            return: {
                departure: formatTime(Math.random() * 24),
                arrival: formatTime(Math.random() * 24),
                duration: formatDuration(distance / 80),
                price: trainPrice
            }
        });

        // Add flight option (only for longer distances)
        if (distance > 400) {
            const flightProvider = transportProviders.flight[Math.floor(Math.random() * transportProviders.flight.length)];
            const flightPrice = Math.floor((distance / 100) * 350 + Math.random() * 1000);
            providers.push({
                name: flightProvider.name,
                type: "flight",
                outbound: {
                    departure: formatTime(Math.random() * 24),
                    arrival: formatTime(Math.random() * 24),
                    duration: formatDuration(distance / 800),
                    amenities: flightProvider.amenities,
                    price: flightPrice
                },
                return: {
                    departure: formatTime(Math.random() * 24),
                    arrival: formatTime(Math.random() * 24),
                    duration: formatDuration(distance / 800),
                    price: flightPrice
                }
            });
        }

        routes.push({
            from: fromCity.name,
            to: toCity.name,
            distance: distance,
            providers: providers
        });
    });

    return routes;
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of Earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.floor(R * c);
}

function formatTime(hours) {
    const h = Math.floor(hours);
    const m = Math.floor((hours - h) * 60);
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

function formatDuration(hours) {
    const h = Math.floor(hours);
    const m = Math.floor((hours - h) * 60);
    return `${h}h ${m}m`;
}

// ============================================
// LOCATION DETECTION & VALIDATION
// ============================================

function getLocationInfo(cityName) {
    const city = citiesDatabase.find(c => c.name.toLowerCase() === cityName.toLowerCase());
    return city || null;
}

function getLocationTypeBadge(type) {
    const badges = {
        "Metro": { class: "badge-metro", text: "🏙️ Metro City" },
        "Tier-1": { class: "badge-tier1", text: "🏢 Tier-1 City" },
        "Tier-2": { class: "badge-tier2", text: "🏘️ Tier-2 City" },
        "Tier-3": { class: "badge-tier3", text: "🌄 Tier-3 City" }
    };
    return badges[type] || { class: "", text: "" };
}

function getSuggestionBadgeClass(type) {
    const classes = {
        "Metro": "type-metro",
        "Tier-1": "type-tier1",
        "Tier-2": "type-tier2",
        "Tier-3": "type-tier3"
    };
    return classes[type] || "";
}

// ============================================
// AUTOCOMPLETE FUNCTIONALITY
// ============================================

let currentFromIndex = -1;
let currentToIndex = -1;
let allRoutes = [];

function handleFromInput(value) {
    if (value.length === 0) {
        document.getElementById('fromSuggestions').classList.remove('show');
        document.getElementById('fromBadge').innerHTML = '';
        return;
    }
    showFromSuggestions();
}

function handleToInput(value) {
    if (value.length === 0) {
        document.getElementById('toSuggestions').classList.remove('show');
        document.getElementById('toBadge').innerHTML = '';
        return;
    }
    showToSuggestions();
}

function showFromSuggestions() {
    const input = document.getElementById('from');
    const value = input.value.toLowerCase();
    
    const filtered = citiesDatabase.filter(city =>
        city.name.toLowerCase().includes(value) ||
        city.state.toLowerCase().includes(value)
    );

    displaySuggestions(filtered, 'fromSuggestions', 'from');
}

function showToSuggestions() {
    const input = document.getElementById('to');
    const value = input.value.toLowerCase();
    
    const filtered = citiesDatabase.filter(city =>
        city.name.toLowerCase().includes(value) ||
        city.state.toLowerCase().includes(value)
    );

    displaySuggestions(filtered, 'toSuggestions', 'to');
}

function displaySuggestions(suggestions, containerId, fieldType) {
    const container = document.getElementById(containerId);
    
    if (suggestions.length === 0) {
        container.classList.remove('show');
        return;
    }

    container.innerHTML = suggestions.slice(0, 10).map((city, index) => `
        <div class="suggestion-item" onclick="selectSuggestion('${city.name}', '${fieldType}')">
            <div class="suggestion-text">
                <div class="suggestion-city">${city.name}</div>
                <div class="suggestion-state">${city.state}</div>
            </div>
            <div class="suggestion-type ${getSuggestionBadgeClass(city.type)}">${city.type}</div>
        </div>
    `).join('');

    container.classList.add('show');
}

function selectSuggestion(cityName, fieldType) {
    const input = document.getElementById(fieldType);
    const badgeContainer = document.getElementById(fieldType + 'Badge');
    const suggestionsContainer = document.getElementById(fieldType + 'Suggestions');
    
    input.value = cityName;
    suggestionsContainer.classList.remove('show');

    const cityInfo = getLocationInfo(cityName);
    if (cityInfo) {
        const badge = getLocationTypeBadge(cityInfo.type);
        badgeContainer.innerHTML = `<div class="location-badge ${badge.class}">${badge.text}</div>`;
        
        // Show location info panel
        showLocationInfo();
    }
}

function handleKeyboard(event, fieldType) {
    const suggestionsId = fieldType + 'Suggestions';
    const container = document.getElementById(suggestionsId);
    const items = container.querySelectorAll('.suggestion-item');

    if (event.key === 'ArrowDown') {
        event.preventDefault();
        currentFromIndex = (currentFromIndex + 1) % items.length;
        items.forEach(item => item.classList.remove('highlighted'));
        items[currentFromIndex].classList.add('highlighted');
    } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        currentFromIndex = (currentFromIndex - 1 + items.length) % items.length;
        items.forEach(item => item.classList.remove('highlighted'));
        items[currentFromIndex].classList.add('highlighted');
    } else if (event.key === 'Enter') {
        event.preventDefault();
        if (items[currentFromIndex]) {
            const cityName = items[currentFromIndex].querySelector('.suggestion-city').textContent;
            selectSuggestion(cityName, fieldType);
        }
    } else if (event.key === 'Escape') {
        container.classList.remove('show');
    }
}

// ============================================
// LOCATION INFO DISPLAY
// ============================================

function showLocationInfo() {
    const fromCity = getLocationInfo(document.getElementById('from').value);
    const toCity = getLocationInfo(document.getElementById('to').value);

    if (fromCity || toCity) {
        document.getElementById('locationPanel').style.display = 'block';

        if (fromCity) {
            document.getElementById('fromInfo').innerHTML = `
                <p><strong>${fromCity.name}</strong></p>
                <p style="color: #999; font-size: 0.9em;">${fromCity.state}</p>
                <p>${getLocationTypeBadge(fromCity.type).text}</p>
            `;
        }

        if (toCity) {
            document.getElementById('toInfo').innerHTML = `
                <p><strong>${toCity.name}</strong></p>
                <p style="color: #999; font-size: 0.9em;">${toCity.state}</p>
                <p>${getLocationTypeBadge(toCity.type).text}</p>
            `;
        }

        // Show popular routes
        if (fromCity) {
            displayPopularRoutes(fromCity);
        }
    }
}

function displayPopularRoutes(city) {
    const container = document.getElementById('popularRoutesContainer');
    container.innerHTML = city.popular_destinations.map(dest => `
        <button class="popular-route-btn" onclick="selectPopularRoute('${city.name}', '${dest}')">
            ${city.name} → ${dest}
        </button>
    `).join('');
}

function selectPopularRoute(from, to) {
    document.getElementById('from').value = from;
    document.getElementById('to').value = to;
    
    const fromBadge = getLocationInfo(from);
    const toBadge = getLocationInfo(to);
    
    if (fromBadge) {
        const badge = getLocationTypeBadge(fromBadge.type);
        document.getElementById('fromBadge').innerHTML = `<div class="location-badge ${badge.class}">${badge.text}</div>`;
    }
    
    if (toBadge) {
        const badge = getLocationTypeBadge(toBadge.type);
        document.getElementById('toBadge').innerHTML = `<div class="location-badge ${badge.class}">${badge.text}</div>`;
    }
    
    showLocationInfo();
}

// ============================================
// SEARCH & RESULTS
// ============================================

let currentResults = [];
let currentFilter = 'all';
let currentSort = 'price';

function searchRoutes() {
    const from = document.getElementById('from').value.trim();
    const to = document.getElementById('to').value.trim();

    if (!from || !to) {
        alert('Please select both source and destination cities');
        return;
    }

    const matchedRoutes = allRoutes.filter(route =>
        route.from.toLowerCase() === from.toLowerCase() &&
        route.to.toLowerCase() === to.toLowerCase()
    );

    if (matchedRoutes.length === 0) {
        document.getElementById('results').innerHTML = '';
        document.getElementById('noResults').style.display = 'block';
        document.getElementById('filterSection').style.display = 'none';
        return;
    }

    currentResults = [];
    matchedRoutes.forEach(route => {
        route.providers.forEach(provider => {
            currentResults.push({
                ...provider,
                from: route.from,
                to: route.to,
                distance: route.distance
            });
        });
    });

    document.getElementById('noResults').style.display = 'none';
    document.getElementById('filterSection').style.display = 'block';

    applyFiltersAndSort();
}

function filterByType(type) {
    currentFilter = type;

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    applyFiltersAndSort();
}

function applySorting() {
    currentSort = document.getElementById('sortBy').value;
    applyFiltersAndSort();
}

function applyFiltersAndSort() {
    let filtered = currentResults;

    if (currentFilter !== 'all') {
        filtered = filtered.filter(item => item.type === currentFilter);
    }

    if (currentSort === 'price') {
        filtered.sort((a, b) => (a.outbound.price + a.return.price) - (b.outbound.price + b.return.price));
    } else if (currentSort === 'duration') {
        filtered.sort((a, b) => timeToMinutes(a.outbound.duration) - timeToMinutes(b.outbound.duration));
    } else if (currentSort === 'type') {
        const typeOrder = { bus: 0, train: 1, flight: 2 };
        filtered.sort((a, b) => typeOrder[a.type] - typeOrder[b.type]);
    }

    displayResults(filtered);
}

function timeToMinutes(timeStr) {
    const parts = timeStr.split('h');
    const hours = parseInt(parts[0].trim());
    const minutes = parseInt(parts[1].trim());
    return hours * 60 + minutes;
}

function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p style="text-align: center; color: #999;">No results found.</p>';
        return;
    }

    const lowestPrice = Math.min(...results.map(r => r.outbound.price + r.return.price));

    results.forEach((result) => {
        const totalPrice = result.outbound.price + result.return.price;
        const isLowest = totalPrice === lowestPrice;
        const typeIcon = result.type === 'bus' ? '🚌' : result.type === 'train' ? '🚄' : '✈️';
        const typeClass = `type-${result.type}`;

        const card = document.createElement('div');
        card.className = 'result-card';

        const badge = isLowest ? '<div class="badge">💰 Lowest Cost</div>' : '';

        const outboundAmenities = result.outbound.amenities.map(a => `<span class="amenity-badge">${a}</span>`).join('');
        const returnAmenities = result.return.amenities ? result.return.amenities.map(a => `<span class="amenity-badge">${a}</span>`).join('') : '';

        card.innerHTML = `
            ${badge}
            <div class="card-header">
                <div class="transport-type">
                    <span class="transport-icon ${typeClass}">${typeIcon}</span>
                    <span class="provider-name">${result.name}</span>
                </div>
                <div class="route-info">
                    <span style="color: #666; font-size: 0.95em;">${result.from} → ${result.to} (${result.distance} km)</span>
                </div>
            </div>

            <div class="journey-container">
                <div class="journey">
                    <div class="journey-title">🚀 Outbound Journey</div>
                    <div class="journey-details">
                        <div class="time-info">
                            <div>
                                <div class="time">${result.outbound.departure}</div>
                                <div class="time-label">Departure</div>
                            </div>
                            <div style="color: #ccc;">→</div>
                            <div>
                                <div class="time">${result.outbound.arrival}</div>
                                <div class="time-label">Arrival</div>
                            </div>
                        </div>
                        <div class="duration">${result.outbound.duration}</div>
                    </div>
                    <div class="amenities">${outboundAmenities}</div>
                </div>

                <div class="journey">
                    <div class="journey-title">🔙 Return Journey</div>
                    <div class="journey-details">
                        <div class="time-info">
                            <div>
                                <div class="time">${result.return.departure}</div>
                                <div class="time-label">Departure</div>
                            </div>
                            <div style="color: #ccc;">→</div>
                            <div>
                                <div class="time">${result.return.arrival}</div>
                                <div class="time-label">Arrival</div>
                            </div>
                        </div>
                        <div class="duration">${result.return.duration}</div>
                    </div>
                    <div class="amenities">${returnAmenities || outboundAmenities}</div>
                </div>
            </div>

            <div class="pricing-section">
                <div class="price-breakdown">
                    <div class="price-item">
                        <span class="price-label">Outbound (${result.from} → ${result.to}):</span>
                        <span class="price-value">₹${result.outbound.price}</span>
                    </div>
                    <div class="price-item">
                        <span class="price-label">Return (${result.to} → ${result.from}):</span>
                        <span class="price-value">₹${result.return.price}</span>
                    </div>
                </div>
                <div class="total-price">
                    <div class="price-label">Total Round-Trip Price</div>
                    <div class="price-value">₹${totalPrice}</div>
                </div>
            </div>
            <button class="view-details-btn">View Details & Book</button>
        `;

        resultsContainer.appendChild(card);
    });
}

// ============================================
// INITIALIZATION
// ============================================

// Generate routes on page load
allRoutes = generateRoutes();

// Close suggestions when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('.autocomplete-wrapper') && !event.target.closest('.autocomplete-dropdown')) {
        document.getElementById('fromSuggestions').classList.remove('show');
        document.getElementById('toSuggestions').classList.remove('show');
    }
});
