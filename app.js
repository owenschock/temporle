// --- SUPABASE INIT ---
const supabaseUrl = 'https://sdemibvbmwigtzsnlglu.supabase.co';
const supabaseKey = 'sb_publishable_Ur1vpJgla-V8OnLpm-c7Hw_TAe7ML5P';

// FIXED: We renamed 'supabase' to 'supabaseClient' to avoid the naming collision!
const supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey);

// --- STORY MODE: THE TEMPORAL WEB ---


const storyNodes = {
    // --- CHAPTER 1: ROUTINE OPERATIONS (3 Levels) ---
    "node_001": {
        chapter: "Chapter I: Routine Operations",
        name: "Standard Sweep",
        era: "1990s", target: "Germany", mutation: "none",
        description: "COMMAND: Standard temporal alignment. Triangulate the target.",
        scenario: "The Berlin Wall has fallen. The Cold War thaws.",
        continent: "Europe",
        unlocks: ["node_002"]
    },
    "node_002": {
        chapter: "Chapter I: Routine Operations",
        name: "Industrial Echo",
        era: "1850s", target: "United Kingdom", mutation: "none",
        description: "COMMAND: Minor fluctuations detected. Proceed with sweep.",
        scenario: "The smog of the Industrial Revolution blankets the capital.",
        continent: "Europe",
        unlocks: ["node_003"]
    },
    "node_003": {
        chapter: "Chapter I: Routine Operations",
        name: "The Fracture",
        era: "1453 AD", target: "Turkey", mutation: "none",
        description: "COMMAND: WARNING. High-density anomaly. Exercise caution.",
        scenario: "Massive cannons batter the impenetrable walls of Constantinople.",
        continent: "Europe/Asia",
        unlocks: ["node_004"] 
    },

    // --- CHAPTER 2: THE IRON CURTAIN (10 Levels | Theme: Radar Jamming) ---
    "node_004": { // The Chapter Root
        chapter: "Chapter II: The Iron Curtain",
        name: "Operation Chrome",
        era: "1962", target: "Cuba", mutation: "radar_jamming",
        description: "COMMAND: Subject Zero is scrambling our sensors. Rely on raw distance data.",
        scenario: "Nuclear missiles are spotted 90 miles from the US coast.",
        continent: "North America",
        unlocks: ["node_201", "node_204"] // Splits into Top and Bottom Branches!
    },
    // Top Branch (The Space & Arms Race)
    "node_201": { 
        chapter: "Chapter II: The Iron Curtain",
        name: "Space Race",
        era: "1957", target: "Kazakhstan", mutation: "radar_jamming",
        description: "COMMAND: Maintain lock on the launch site. Do not lose the signal.",
        scenario: "Sputnik 1 launches, beginning the space age.",
        continent: "Asia",
        unlocks: ["node_202"]
    },
    "node_202": { 
        chapter: "Chapter II: The Iron Curtain",
        name: "Checkpoint Charlie",
        era: "1961", target: "Germany", mutation: "radar_jamming",
        description: "COMMAND: A tense standoff at the border of East and West. Secure the sector.",
        scenario: "American and Soviet tanks face off at a divided city crossing.",
        continent: "Europe",
        unlocks: ["node_203"]
    },
    "node_203": { 
        chapter: "Chapter II: The Iron Curtain",
        name: "Prague Spring",
        era: "1968", target: "Czech Republic", mutation: "radar_jamming",
        description: "COMMAND: Suppress the unauthorized political liberalization.",
        scenario: "Tanks roll into the capital to crush a reformist movement.",
        continent: "Europe",
        unlocks: ["node_208"]
    },
    "node_208": { 
        chapter: "Chapter II: The Iron Curtain",
        name: "Able Archer",
        era: "1983", target: "Belgium", mutation: "radar_jamming",
        description: "COMMAND: A NATO exercise is being misinterpreted as a real strike. Stabilize it.",
        scenario: "The world sits on the brink of nuclear war over a simulated wargame.",
        continent: "Europe",
        unlocks: ["node_boss_2"]
    },
    // Bottom Branch (Proxy Wars)
    "node_204": { 
        chapter: "Chapter II: The Iron Curtain",
        name: "Tsar Bomba",
        era: "1961", target: "Russia", mutation: "radar_jamming",
        description: "COMMAND: The largest nuclear detonation in history. Subject Zero is trying to suppress it.",
        scenario: "A 50-megaton blast is about to shatter the Arctic circle.",
        continent: "Europe/Asia",
        unlocks: ["node_205"]
    },
    "node_205": { 
        chapter: "Chapter II: The Iron Curtain",
        name: "The Proxy War",
        era: "1965", target: "Vietnam", mutation: "radar_jamming",
        description: "COMMAND: Target locked. Proceed with immediate pruning protocol.",
        scenario: "Jungles burn. The timeline is fractured across the parallel.",
        continent: "Asia",
        unlocks: ["node_206"]
    },
    "node_206": { 
        chapter: "Chapter II: The Iron Curtain",
        name: "Suez Crisis",
        era: "1956", target: "Egypt", mutation: "radar_jamming",
        description: "COMMAND: An unauthorized coalition is attempting to seize the canal.",
        scenario: "A vital global shipping lane becomes a flashpoint for empire collapse.",
        continent: "Africa",
        unlocks: ["node_207"]
    },
    "node_207": { 
        chapter: "Chapter II: The Iron Curtain",
        name: "Contra Rebellion",
        era: "1985", target: "Nicaragua", mutation: "radar_jamming",
        description: "COMMAND: Subject Zero is interfering with covert funding lines.",
        scenario: "Guerilla warfare erupts in the Central American jungles.",
        continent: "North America",
        unlocks: ["node_boss_2"]
    },
    "node_boss_2": { // Chapter 2 Anchor
        chapter: "Chapter II: The Iron Curtain",
        name: "Anchor: The Wall",
        era: "1989", target: "Germany", mutation: "hardcore_lite", 
        description: "COMMAND: Subject Zero is defending the wall. Abilities will cost double.",
        scenario: "The Iron Curtain is cracking, but a rogue agent is trying to hold it together.",
        continent: "Europe",
        unlocks: ["node_301"] // Moves to Ch 3
    },

    // --- CHAPTER 3: THE DARK AGES (10 Levels | Theme: Integrity Bleed) ---
    "node_301": { // The Chapter Root
        chapter: "Chapter III: The Dark Ages",
        name: "The Bronze Collapse",
        era: "1177 BC", target: "Egypt", mutation: "integrity_bleed",
        description: "COMMAND: A divergent timeline survived the Sea Peoples' invasion. Prune the unauthorized thriving cities.",
        scenario: "The Mediterranean burns, but this timeline's Alexandria stands tall. For now.",
        continent: "Africa",
        unlocks: ["node_302", "node_303"] // Splits into Top and Bottom Branches!
    },
    // Top Branch (Plagues & Pandemics)
    "node_302": { 
        chapter: "Chapter III: The Dark Ages",
        name: "The Antonine Plague",
        era: "165 AD", target: "Italy", mutation: "integrity_bleed",
        description: "COMMAND: Unauthorized survivors detected. Re-introduce the pathogen.",
        scenario: "The Roman Empire is healing. The streets are filled with unauthorized citizens.",
        continent: "Europe",
        unlocks: ["node_304"]
    },
    "node_304": {
        chapter: "Chapter III: The Dark Ages",
        name: "The Justinian Plague",
        era: "541 AD", target: "Turkey", mutation: "integrity_bleed",
        description: "COMMAND: The temporal fabric is decaying. Work fast before you bleed out.",
        scenario: "Grain ships from Egypt arrive in the capital carrying infected rats.",
        continent: "Europe/Asia",
        unlocks: ["node_306"]
    },
    "node_306": {
        chapter: "Chapter III: The Dark Ages",
        name: "Cocoliztli Epidemic",
        era: "1545 AD", target: "Mexico", mutation: "integrity_bleed",
        description: "COMMAND: A localized hemorrhagic fever is failing to spread. Correct the anomaly.",
        scenario: "Millions are surviving an outbreak in the highlands. Prune them.",
        continent: "North America",
        unlocks: ["node_307"]
    },
    "node_307": {
        chapter: "Chapter III: The Dark Ages",
        name: "Sweating Sickness",
        era: "1485 AD", target: "United Kingdom", mutation: "integrity_bleed",
        description: "COMMAND: Subject Zero is deploying unauthorized cures.",
        scenario: "A mysterious, rapid-onset illness strikes the English countryside.",
        continent: "Europe",
        unlocks: ["node_boss_3"]
    },
    // Bottom Branch (Famine & Societal Decay)
    "node_303": { 
        chapter: "Chapter III: The Dark Ages",
        name: "The Black Death",
        era: "1347 AD", target: "France", mutation: "integrity_bleed", 
        description: "COMMAND: Ignore the localized screams. Ensure the death toll reaches target metrics.",
        scenario: "Trade ships arrive carrying a deadly cargo. The timeline fractures under the weight of the dead.",
        continent: "Europe",
        unlocks: ["node_305"]
    },
    "node_305": {
        chapter: "Chapter III: The Dark Ages",
        name: "The Great Famine",
        era: "1315 AD", target: "Ireland", mutation: "integrity_bleed", 
        description: "COMMAND: Subject Zero is providing unauthorized agricultural aid. Stop them.",
        scenario: "Heavy rains flood the crops of Northern Europe. A rogue agent is distributing food.",
        continent: "Europe",
        unlocks: ["node_308"]
    },
    "node_308": {
        chapter: "Chapter III: The Dark Ages",
        name: "Year Without a Summer",
        era: "1816 AD", target: "Indonesia", mutation: "integrity_bleed", 
        description: "COMMAND: Suppress the global climate stabilizers.",
        scenario: "Mount Tambora erupts, plunging the globe into a volcanic winter.",
        continent: "Asia",
        unlocks: ["node_309"]
    },
    "node_309": {
        chapter: "Chapter III: The Dark Ages",
        name: "Maya Collapse",
        era: "900 AD", target: "Guatemala", mutation: "integrity_bleed", 
        description: "COMMAND: An ancient civilization is refusing to abandon its cities. Force the collapse.",
        scenario: "Drought ravages the peninsula, but the city-states stand defiant.",
        continent: "North America",
        unlocks: ["node_boss_3"]
    },
    "node_boss_3": { // Chapter 3 Anchor
        chapter: "Chapter III: The Dark Ages",
        name: "Anchor: Alexandria",
        era: "48 BC", target: "Egypt", mutation: "hardcore_med", 
        description: "COMMAND: CRITICAL. Subject Zero is defending the Library. Burn the unauthorized knowledge.",
        scenario: "The greatest archive in human history is completely intact. Command wants it in ashes.",
        continent: "Africa",
        unlocks: ["node_401"] // Moves to Ch 4
    },

    // --- CHAPTER 4: THE AGE OF DISCOVERY (10 Levels | Theme: Fog of War) ---
    "node_401": { // The Chapter Root
        chapter: "Chapter IV: The Age of Discovery",
        name: "The Roanoke Anomaly",
        era: "1590", target: "United States", mutation: "fog_of_war",
        description: "COMMAND: An entire colony has vanished. Sensors blinded. Locate the divergent branch.",
        scenario: "The island is abandoned. The word 'CROATOAN' is carved into a post.",
        continent: "North America",
        unlocks: ["node_402", "node_403"] // Splits into Top and Bottom Branches!
    },
    // Top Branch (Lost Expeditions)
    "node_402": { 
        chapter: "Chapter IV: The Age of Discovery",
        name: "The Franklin Expedition",
        era: "1845", target: "Canada", mutation: "fog_of_war",
        description: "COMMAND: Two ships are hidden in the ice. Target their coordinates.",
        scenario: "Subject Zero has created a warm, divergent oasis in the Arctic.",
        continent: "North America",
        unlocks: ["node_404"]
    },
    "node_404": {
        chapter: "Chapter IV: The Age of Discovery",
        name: "The Lost City of Z",
        era: "1925", target: "Brazil", mutation: "fog_of_war",
        description: "COMMAND: An explorer found an unauthorized civilization. Ensure he never returns.",
        scenario: "A massive, thriving city hidden deep within the Amazon rainforest.",
        continent: "South America",
        unlocks: ["node_406"]
    },
    "node_406": {
        chapter: "Chapter IV: The Age of Discovery",
        name: "Earhart Disappearance",
        era: "1937", target: "Papua New Guinea", mutation: "fog_of_war",
        description: "COMMAND: A pilot has navigated off the approved flight path. Correct her trajectory.",
        scenario: "A Lockheed Electra vanishes over the central Pacific Ocean.",
        continent: "Oceania",
        unlocks: ["node_407"]
    },
    "node_407": {
        chapter: "Chapter IV: The Age of Discovery",
        name: "Burke and Wills",
        era: "1861", target: "Australia", mutation: "fog_of_war",
        description: "COMMAND: The inland explorers are surviving on an unauthorized timeline.",
        scenario: "An expedition attempts to cross a massive, punishing desert interior.",
        continent: "Oceania",
        unlocks: ["node_boss_4"]
    },
    // Bottom Branch (Rogue Navigators)
    "node_403": { 
        chapter: "Chapter IV: The Age of Discovery",
        name: "The Magellan Route",
        era: "1521", target: "Philippines", mutation: "fog_of_war",
        description: "COMMAND: Target detected in the Pacific. Neutralize the unauthorized circumnavigation.",
        scenario: "The fleet approaches the islands. History is about to be violently rewritten.",
        continent: "Asia",
        unlocks: ["node_405"]
    },
    "node_405": {
        chapter: "Chapter IV: The Age of Discovery",
        name: "El Dorado",
        era: "1537", target: "Peru", mutation: "fog_of_war",
        description: "COMMAND: Subject Zero is hiding the gold reserves. Find them.",
        scenario: "A mythical city of gold thrives in the Andes, completely hidden from scanners.",
        continent: "South America",
        unlocks: ["node_408"]
    },
    "node_408": {
        chapter: "Chapter IV: The Age of Discovery",
        name: "Mutiny on the Bounty",
        era: "1789", target: "Fiji", mutation: "fog_of_war",
        description: "COMMAND: A crew has rebelled against the Prime Timeline ledger. Suppress the mutiny.",
        scenario: "Rogue sailors set their captain adrift and hide in the South Pacific.",
        continent: "Oceania",
        unlocks: ["node_409"]
    },
    "node_409": {
        chapter: "Chapter IV: The Age of Discovery",
        name: "The Northwest Passage",
        era: "1906", target: "Russia", mutation: "fog_of_war",
        description: "COMMAND: An unauthorized icebreaker is charting the northern seas.",
        scenario: "A treacherous, frozen route connecting two oceans is successfully navigated.",
        continent: "Europe/Asia",
        unlocks: ["node_boss_4"]
    },
    "node_boss_4": { // Chapter 4 Anchor
        chapter: "Chapter IV: The Age of Discovery",
        name: "Anchor: Tunguska",
        era: "1908", target: "Russia", mutation: "hardcore_heavy", 
        description: "COMMAND: Subject Zero has deployed a massive decoy network and hijacked your inputs. Do not let the timeline splinter.",
        scenario: "A blinding light erupts over the Siberian taiga. The compass spins wildly.",
        continent: "Europe/Asia",
        unlocks: ["node_boss_1"] // Connects to Chapter V
    },

    // --- CHAPTER 5: THE ANCHOR (1 Level | The Final Boss) ---
    "node_boss_1": {
        chapter: "Chapter V: Temporal Anchor Alpha", 
        name: "The Manhattan Project",
        era: "1945", target: "United States", mutation: "hardcore", 
        description: "COMMAND: CRITICAL. Subject Zero is attempting to erase the atomic age. ALL ABILITIES DISABLED.",
        scenario: "The Trinity test is prepared in the desert of New Mexico.",
        continent: "North America",
        unlocks: [] // End of the road
    }
};
// --- NARRATIVE: THE LORE ARCHIVE ---
const archiveDatabase = {
    "doc_001": {
        title: "TAD Onboarding Brief",
        cost: 0,
        content: "WELCOME TO THE DIRECTORATE.<br><br>As a Field Triangulator, your role is paramount to the stability of the Prime Timeline. You will encounter 'anomalies'—events that deviate from the approved historical ledger. <br><br>Do not interact with the locals. Do not attempt to understand the temporal mechanics. Simply scan the epicenter, lock the coordinates, and return to base. <br><br>Predictability is peace. Structure is survival."
    },
    "doc_002": {
        title: "Incident Report: Agent Zero",
        cost: 150,
        content: "RESTRICTED ACCESS.<br><br>Agent [REDACTED] has gone rogue. During a routine sweep in 1920s Berlin, the agent refused to trigger the alignment protocol, citing 'moral objections' to the erasure of the divergent timeline.<br><br>The agent has stolen a Class-4 Temporal Emitter and is moving backwards through the timeline. They are now classified as Subject Zero. Lethal paradox authorization is granted."
    },
    // --- THE DARK TURN ---
    "doc_004": {
        title: "SOP // Timeline Pruning",
        cost: 250,
        content: "EYES ONLY.<br><br>Field Agents often misinterpret the 'Alignment' process. We are not healing a fractured timeline; we are amputating it. When a rogue event occurs—an assassination prevented, a war averted—it spawns millions of unauthorized lives.<br><br>This creates unsustainable supply-chain drag on the Prime Timeline. By locking the coordinates, you are authorizing the localized incineration of that divergent branch. The anomalies are not fixed. They are erased. Efficiency requires sacrifice."
    },
    "doc_005": {
        title: "Intercept: Triangulator [REDACTED]",
        cost: 400,
        content: "DECRYPTED AUDIO LOG.<br><br>\"Command, you're not seeing the data on the ground. This isn't a glitch. I'm looking at a city. They have families. They built a whole society out here in the 1920s branch and you want me to just... press the button?\"<br><br><em>[COMMAND: Agent, you are looking at an unauthorized statistical outlier. Initiate the sequence.]</em><br><br>\"No. They're alive. The math is wrong. You're wrong. I'm shutting the scanner down.\""
    },
    "doc_006": {
        title: "The False Prime Theorem",
        cost: 800,
        content: "DIRECTOR LEVEL CLEARANCE REQUIRED.<br><br>The Entropy Coalition believes we are destroying nature. They fail to realize 'nature' was destroyed millennia ago. <br><br>The timeline we are protecting is not the original. The Prime Timeline is a carefully engineered sequence of events designed to guarantee exactly one outcome: the eventual founding of the Temporal Alignment Directorate.<br><br>If we fall, our history falls. We protect the timeline because we are the timeline."
    },
    // --- POST-GAME EPILOGUES (Hidden until completion) ---
    "doc_epilogue_loyalist": {
        title: "EYES ONLY: Promotion",
        cost: 0,
        content: "DIRECTORATE EYES ONLY.<br><br>Congratulations on your promotion, Director. You successfully excised the unauthorized timelines and neutralized Subject Zero. <br><br>Your first order of business: we have detected new micro-fractures in the 21st century. We believe there are sympathizers. You are authorized to begin preemptive timeline pruning. Welcome to the top."
    },
    "doc_epilogue_rebel": {
        title: "INCIDENT REPORT: Subject One",
        cost: 0,
        content: "CRITICAL ALERT.<br><br>The Anchor has been shattered. The timeline is in freefall. <br><br>The agent formerly operating your console has gone rogue. They are armed with full temporal knowledge and are actively dismantling our containment fields. <br><br>New target locked. Lethal paradox authorization granted for: Subject One."
    }
};

// The player's progress through the Temporal Web
let storyProgress = {
    unlockedNodes: ["node_001"], 
    clearedNodes: [],            
    currentNode: null,
    health: 100,      
    chronitons: 0,    
    unlockedArchives: ["doc_001"] // NEW: Everyone gets the employee handbook for free
};

// Draws the categorized missions OR the chapter select screen
function renderTemporalMap(activeChapter = null) {
    const container = document.getElementById('nodeContainer');
    container.innerHTML = ''; // Clear it out
    // --- POST-GAME METAMORPHOSIS CHECK ---
    const mapUI = document.getElementById('temporalMapUI');
    const titleElement = mapUI.querySelector('h2');
    const subtitleElement = mapUI.querySelector('p');
    const playerEnding = localStorage.getItem('temporle_ending');

    if (playerEnding === 'loyalist') {
        mapUI.classList.add('loyalist-theme');
        titleElement.innerHTML = `Temporle: Prime <span class="loyalist-badge"><i class="bi bi-star-fill"></i> Director</span>`;
        subtitleElement.innerText = "The Prime Timeline is secure. Awaiting pruning orders.";
        subtitleElement.style.color = "#d4af37";
    } else if (playerEnding === 'rebel') {
        mapUI.classList.add('rebel-theme');
        titleElement.innerText = "HISTORY IS FREE";
        subtitleElement.innerText = "The timeline is fractured. The Directorate is hunting you.";
        subtitleElement.style.color = "var(--danger)";
    } else {
        // Default (Hasn't beaten game yet)
        titleElement.innerText = "TIMELINE TOPOGRAPHY";
        subtitleElement.innerText = "Select a temporal folder to view anomalies.";
    }
    // -------------------------------------

    // 1. Update the UI Status Bar
    document.getElementById('mapHealthDisplay').innerText = storyProgress.health + '%';
    document.getElementById('mapCurrencyDisplay').innerHTML = `<i class="bi bi-hexagon-fill"></i> ${storyProgress.chronitons}`;

    // 2. Group the nodes and calculate completion math
    const groupedNodes = {};

    for (const [nodeId, nodeData] of Object.entries(storyNodes)) {
        const isCleared = storyProgress.clearedNodes.includes(nodeId);
        const isUnlocked = storyProgress.unlockedNodes.includes(nodeId);

        // Create the folder if it doesn't exist yet
        if (!groupedNodes[nodeData.chapter]) {
            groupedNodes[nodeData.chapter] = {
                nodes: [],
                clearedCount: 0,
                totalCount: 0,
                isVisible: false // Hides chapters you haven't reached yet
            };
        }

        // Tally up the total levels in this chapter
        groupedNodes[nodeData.chapter].totalCount++;

        // If the player has access to this specific node...
        if (isUnlocked || isCleared) {
            groupedNodes[nodeData.chapter].isVisible = true; 
            groupedNodes[nodeData.chapter].nodes.push({ id: nodeId, ...nodeData, isCleared });
            if (isCleared) groupedNodes[nodeData.chapter].clearedCount++;
        }
    }

    // 3A. RENDER: THE CHAPTER SELECT MENU
    if (!activeChapter) {
        for (const [chapterName, chapterData] of Object.entries(groupedNodes)) {
            if (!chapterData.isVisible) continue; // Skip spoiler chapters

            const isFullyCleared = chapterData.clearedCount === chapterData.totalCount;
            const iconColor = isFullyCleared ? 'var(--success)' : 'var(--primary)';

            const cardHTML = `
                <button style="background: #ffffff; border: 1px solid #e5e7eb; border-left: 4px solid ${iconColor}; border-radius: 6px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); display: flex; justify-content: space-between; align-items: center; padding: 20px; width: 100%; cursor: pointer; transition: all 0.2s ease; font-family: inherit;" 
                onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 12px rgba(0,0,0,0.1)';" 
                onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 5px rgba(0,0,0,0.05)';" 
                onclick="renderTemporalMap('${chapterName}')">
                    <div style="text-align: left;">
                        <div style="font-size: 1.1rem; font-weight: 900; color: #111827;"><i class="bi bi-folder2-open" style="color: ${iconColor}; margin-right: 8px;"></i> ${chapterName}</div>
                        <div style="font-size: 0.8rem; color: #6b7280; margin-top: 5px;">Access temporal coordinates...</div>
                    </div>
                    <div style="text-align: right;">
                        <div style="font-size: 0.7rem; font-weight: 800; color: ${iconColor}; text-transform: uppercase; letter-spacing: 1px;">Progress</div>
                        <div style="font-size: 1.2rem; font-weight: 900; color: #111827;">${chapterData.clearedCount} / ${chapterData.totalCount}</div>
                    </div>
                </button>
            `;
            container.insertAdjacentHTML('beforeend', cardHTML);
        }
    } 
    // 3B. RENDER: THE INDIVIDUAL LEVEL MENU (THE NODE TREE)
    else {
        // Draw the "Back" Button & Chapter Header
        container.innerHTML = `
            <button class="btn-modal" style="background: transparent; border: 1px solid rgba(255,255,255,0.2); color: var(--text-muted); width: 100%; margin-bottom: 10px; font-size: 0.85rem;" onclick="renderTemporalMap()">
                <i class="bi bi-arrow-left"></i> Return to Folders
            </button>
            <div class="chapter-header" style="margin-top: 10px; margin-bottom: 20px;">
                <i class="bi bi-diagram-3-fill"></i> ${activeChapter}
            </div>
            <div id="treeContainer" class="tree-wrapper"></div>
        `;

        const treeContainer = document.getElementById('treeContainer');

        // --- ALGORITHM: CALCULATE NODE DEPTH FOR BRANCHING ---
        // 1. Grab every single node in this chapter (even locked ones)
        const chapterNodesData = Object.entries(storyNodes).filter(([id, data]) => data.chapter === activeChapter);
        const nodeMap = {};
        
        chapterNodesData.forEach(([id, data]) => {
            nodeMap[id] = { ...data, id, depth: 0, incomingEdges: 0 };
        });

        // 2. Count incoming connections to find the "Root" of the chapter
        chapterNodesData.forEach(([id, data]) => {
            if (data.unlocks) {
                data.unlocks.forEach(u => {
                    if (nodeMap[u]) nodeMap[u].incomingEdges++;
                });
            }
        });

        // 3. Breadth-First Search to assign the correct column (depth) to each node
        let roots = Object.values(nodeMap).filter(n => n.incomingEdges === 0);
        let queue = [...roots];
        
        while (queue.length > 0) {
            let curr = queue.shift();
            if (curr.unlocks) {
                curr.unlocks.forEach(u => {
                    if (nodeMap[u]) {
                        // Push children to the next column. Bosses get pushed to the furthest column.
                        nodeMap[u].depth = Math.max(nodeMap[u].depth, curr.depth + 1);
                        queue.push(nodeMap[u]);
                    }
                });
            }
        }

        // 4. Group the nodes by their Depth Column
        const columns = [];
        Object.values(nodeMap).forEach(n => {
            if (!columns[n.depth]) columns[n.depth] = [];
            columns[n.depth].push(n);
        });

        // --- RENDER THE COLUMNS ---
        columns.forEach(colNodes => {
            if (!colNodes) return;
            
            const colDiv = document.createElement('div');
            colDiv.className = 'tree-column';

            colNodes.forEach(node => {
                const isCleared = storyProgress.clearedNodes.includes(node.id);
                const isUnlocked = storyProgress.unlockedNodes.includes(node.id);
                const isBoss = node.id.includes('boss');
                
                let cardHTML = '';

                // STATE: LOCKED (Visible, but cloaked)
                if (!isUnlocked && !isCleared) {
                    cardHTML = `
                        <div class="node-card locked">
                            <div style="font-size: 1.5rem; color: #9ca3af; margin-bottom: 5px;"><i class="bi bi-lock-fill"></i></div>
                            <div style="font-size: 0.7rem; font-weight: 800; color: #9ca3af; letter-spacing: 1px;">ENCRYPTED ERA</div>
                            <div style="font-size: 0.9rem; font-weight: 800; color: #6b7280; margin-top: 5px;">Classified Target</div>
                            <div style="font-size: 0.7rem; color: #9ca3af; margin-top: 10px;">Clear previous nodes to access.</div>
                        </div>
                    `;
                } 
                // STATE: UNLOCKED OR CLEARED
                else {
                    let statusIcon = '<i class="bi bi-unlock-fill" style="color: var(--primary);"></i>';
                    let cssClass = 'node-card unlocked';
                    let titleStyle = 'color: #111827;';
                    
                    if (isCleared) {
                        statusIcon = '<i class="bi bi-check-circle-fill" style="color: var(--success);"></i>';
                        cssClass += ' cleared';
                    }
                    if (isBoss) {
                        titleStyle = 'color: var(--danger);';
                    }

                    cardHTML = `
                        <div class="${cssClass}" onclick="startStoryNode('${node.id}')">
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 5px;">
                                <div style="font-size: 0.75rem; font-weight: 800; color: var(--primary);">${node.era}</div>
                                <div>${statusIcon}</div>
                            </div>
                            <div style="font-size: 1.1rem; font-weight: 900; ${titleStyle} margin-bottom: 5px;">${node.name}</div>
                            <div style="font-size: 0.8rem; color: #4b5563; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${node.description}</div>
                            ${node.mutation !== 'none' ? `<div style="margin-top: 10px; font-size: 0.65rem; color: var(--danger); font-weight: 800; text-transform: uppercase; background: #fee2e2; padding: 3px 6px; border-radius: 4px; display: inline-block;"><i class="bi bi-exclamation-triangle-fill"></i> ${node.mutation.replace('_', ' ')}</div>` : ''}
                        </div>
                    `;
                }
                
                colDiv.insertAdjacentHTML('beforeend', cardHTML);
            });
            
            treeContainer.appendChild(colDiv);
        });
    }
}

function startStoryNode(nodeId) {
    storyProgress.currentNode = nodeId;
    const nodeData = storyNodes[nodeId];
    
    // Hide the map, show the game UI!
    document.getElementById('temporalMapUI').style.display = 'none';
    document.getElementById('gameUI').style.display = 'block';

    // 1. Find the country in the main database to get the Lat/Lon coordinates
    const dbCountry = countries.find(c => c.name.toLowerCase() === nodeData.target.toLowerCase());

    // 2. Construct a standard Level Object so the game engine understands it
    const storyLevel = {
        year: nodeData.era,
        name: nodeData.name,
        center: { lat: dbCountry.lat, lon: dbCountry.lon },
        validCountry: nodeData.target,
        scenario: nodeData.scenario,     
        continent: nodeData.continent,
        mutation: nodeData.mutation      // NEW: Pass the mutation to the engine!
    };

    // 3. Inject it into the game engine array
    currentLevelList = [storyLevel];
    
    // --- NEW: PULL PERSISTENT CAMPAIGN HEALTH ---
    health = storyProgress.health; 

    // MUTATION: BOSS SCALING
    if (nodeData.mutation === 'hardcore_lite') {
        health = Math.min(health, 75); // Caps at 75%
        console.log("HARDCORE LITE: Integrity capped at 75%.");
    } else if (nodeData.mutation === 'hardcore_med' || nodeData.mutation === 'hardcore_heavy' || nodeData.mutation === 'hardcore') {
        health = Math.min(health, 50); // Caps at 50%
        console.log("HARDCORE CRITICAL: Integrity capped at 50%.");
    }
    
    // 4. Let your existing engine do all the setup work safely!
    loadLevel(0);

    // Override the UI label for Story Mode specifically
    document.getElementById('modeLabel').innerText = `NODE: ${nodeId.replace('node_', '')}`;
    console.log(`Mission Active: ${nodeData.name} | Target locked.`);
}

// Call this when the player successfully guesses the target in Story Mode
function completeCurrentNode() {
    const nodeId = storyProgress.currentNode;
    const nodeData = storyNodes[nodeId];
    stopMemoryLeak();

    // SAVE THEIR SURVIVING HEALTH
    storyProgress.health = health;

    // AWARD CURRENCY (Base 50 + Bonus for high health)
    const payout = 50 + Math.floor(health / 2);
    storyProgress.chronitons += payout;

    activeUpgrades = { lodOverride: false, erosionBuffer: false, subspaceSensors: false, predictiveEngine: false };

    // 1. Mark current node as cleared
    if (!storyProgress.clearedNodes.includes(nodeId)) {
        storyProgress.clearedNodes.push(nodeId);
    }

    // 2. Unlock the next nodes in the branch
    if (nodeData.unlocks) {
        nodeData.unlocks.forEach(unlockId => {
            if (!storyProgress.unlockedNodes.includes(unlockId)) {
                storyProgress.unlockedNodes.push(unlockId);
            }
        });
    }

    // 3. Save to local browser (and cloud later!)
    saveStoryProgress();

    // 4. THE GLITCH INTERCEPT
    if (nodeId === "node_003") {
        triggerFractureGlitch();
        return; 
    }

    // 5. THE NARRATIVE ROUTER
    document.getElementById('gameUI').style.display = 'none';
    document.getElementById('winModal').style.display = 'none';
    document.body.classList.remove('fog-active');

    // Check if beating this node unlocked a transmission
    if (nodeTransmissions[nodeId]) {
        playTransmission(nodeId);
    } else {
        // No story? Just go back to the map.
        document.getElementById('temporalMapUI').style.display = 'block';
        renderTemporalMap();
    }
}

function playTransmission(nodeId) {
    const beat = nodeTransmissions[nodeId];
    document.getElementById('storySender').innerText = beat.sender;
    document.getElementById('storyTitle').innerText = beat.title;
    
    const msgContainer = document.getElementById('storyMsg');
    msgContainer.innerHTML = ""; 
    
    if (beat.sender !== "COMMAND") {
        document.getElementById('storySender').style.color = "var(--danger)";
        document.querySelector('#storyModal .modal').style.borderColor = "var(--danger)";
    } else {
        document.getElementById('storySender').style.color = "var(--primary)";
        document.querySelector('#storyModal .modal').style.borderColor = "var(--primary)";
    }

    // Hijack the "PROCEED" button to return to the map!
    const proceedBtn = document.querySelector('#storyModal .btn-modal');
    proceedBtn.onclick = () => {
        document.getElementById('storyModal').style.display = 'none';
        document.getElementById('temporalMapUI').style.display = 'block';
        renderTemporalMap();
    };

    document.getElementById('storyModal').style.display = 'flex';

    // TYPEWRITER EFFECT
    let i = 0;
    function typeWriter() {
        if (i < beat.msg.length) {
            if (beat.msg.charAt(i) === '<') {
                let tag = "";
                while (beat.msg.charAt(i) !== '>' && i < beat.msg.length) { tag += beat.msg.charAt(i); i++; }
                tag += '>';
                msgContainer.innerHTML += tag;
            } else {
                msgContainer.innerHTML += beat.msg.charAt(i);
            }
            i++;
            setTimeout(typeWriter, 20);
        }
    }
    setTimeout(typeWriter, 300);
}

// The Cinematic Fracture Event
function triggerFractureGlitch() {
    // Hide everything else
    document.getElementById('winModal').style.display = 'none';
    document.getElementById('gameUI').style.display = 'none';

    // Create a terrifying red glitch overlay dynamically
    const glitchOverlay = document.createElement('div');
    glitchOverlay.style.position = 'fixed';
    glitchOverlay.style.top = '0';
    glitchOverlay.style.left = '0';
    glitchOverlay.style.width = '100vw';
    glitchOverlay.style.height = '100vh';
    glitchOverlay.style.backgroundColor = 'var(--danger)';
    glitchOverlay.style.color = '#fff';
    glitchOverlay.style.zIndex = '9999';
    glitchOverlay.style.display = 'flex';
    glitchOverlay.style.flexDirection = 'column';
    glitchOverlay.style.alignItems = 'center';
    glitchOverlay.style.justifyContent = 'center';
    glitchOverlay.style.fontFamily = 'monospace';
    glitchOverlay.style.textAlign = 'center';
    
    // Add CSS Shake via inline style
    glitchOverlay.style.animation = 'shake 0.4s infinite';

    glitchOverlay.innerHTML = `
        <h1 style="font-size: 4rem; margin-bottom: 20px; font-weight: 900;">CRITICAL ERROR</h1>
        <p style="font-size: 1.5rem; margin-bottom: 10px; font-weight: 700;">TIMELINE FRACTURE DETECTED AT ORIGIN POINT.</p>
        <p style="font-size: 1.2rem; margin-bottom: 40px;">MULTIPLE PARADOXES SPAWNING. CONTAINMENT FAILED.</p>
        <button class="btn-modal" style="background: #111; color: var(--danger); border: 2px solid var(--danger); box-shadow: 0 0 15px var(--danger);" onclick="rebootFromGlitch(this)">EMERGENCY REBOOT</button>
    `;

    // Inject the CSS keyframes if they don't exist
    if (!document.getElementById('shakeKeyframes')) {
        const style = document.createElement('style');
        style.id = 'shakeKeyframes';
        style.innerHTML = `
            @keyframes shake {
                0% { transform: translate(2px, 1px) rotate(0deg); }
                20% { transform: translate(-3px, 0px) rotate(1deg); }
                40% { transform: translate(1px, -1px) rotate(1deg); }
                60% { transform: translate(-3px, 1px) rotate(0deg); }
                80% { transform: translate(-1px, -1px) rotate(1deg); }
                100% { transform: translate(1px, -2px) rotate(-1deg); }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(glitchOverlay);
}

// Triggers when they click the Emergency Reboot button
function rebootFromGlitch(btn) {
    const overlay = btn.parentElement;
    overlay.remove(); // Destroy the red screen
    
    // --- NEW: Play the urgent Command transmission right after the reboot! ---
    if (nodeTransmissions["node_003"]) {
        playTransmission("node_003");
    } else {
        // Reveal the newly fractured, expanded map!
        document.getElementById('temporalMapUI').style.display = 'block';
        renderTemporalMap(); 
    }
}

// Function to load this progress from LocalStorage
function loadStoryProgress() {
    const saved = localStorage.getItem('temporle_story_save');
    if (saved) {
        storyProgress = JSON.parse(saved);
        
        // SAFETY NET 1: Force unlock Node 1 if corrupted
        if (!storyProgress.unlockedNodes || storyProgress.unlockedNodes.length === 0) {
            storyProgress.unlockedNodes = ["node_001"];
            storyProgress.clearedNodes = [];
        }
        
        // SAFETY NET 2: Add health/currency to old save files
        if (typeof storyProgress.health === 'undefined') storyProgress.health = 100;
        if (typeof storyProgress.chronitons === 'undefined') storyProgress.chronitons = 0;
        if (!storyProgress.unlockedArchives) storyProgress.unlockedArchives = ["doc_001"];

        // --- NEW: RETROACTIVE UNLOCK PATCH ---
        // Scans your old cleared levels and makes sure any NEW content added to them gets unlocked!
        storyProgress.clearedNodes.forEach(clearedId => {
            if (storyNodes[clearedId] && storyNodes[clearedId].unlocks) {
                storyNodes[clearedId].unlocks.forEach(unlockId => {
                    if (!storyProgress.unlockedNodes.includes(unlockId)) {
                        storyProgress.unlockedNodes.push(unlockId);
                    }
                });
            }
        });
    }
}

// Function to save progress (and push to your cloud vault!)
function saveStoryProgress() {
    localStorage.setItem('temporle_story_save', JSON.stringify(storyProgress));
    pushStatsToCloud(); // IT LIVES!
}

// --- AUTH LOGIC ---
async function signInWithGoogle() {
    try {
        // FIXED: Using supabaseClient instead
        const { data, error } = await supabaseClient.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: 'https://owenschock.github.io/temporle/' 
            }
        });
        if (error) throw error;
    } catch (error) {
        console.error("Error logging in:", error.message);
    }
}

// Check if a user is already logged in when the page loads
async function checkUserSession() {
    const { data: { session } } = await supabaseClient.auth.getSession();
    
    if (session) {
        // Logged In: Hide the login wrapper, show profile + logout
        document.getElementById('loginPromptUI').classList.add('hidden');
        document.getElementById('userProfileContainer').classList.remove('hidden');
        document.getElementById('userProfileDisplay').innerText = `Agent Active: ${session.user.email}`;
        
        // NEW: Pull their latest stats from the cloud!
        await pullStatsFromCloud(session.user.id);
        
    } else {
        // Logged Out: Show the login wrapper, hide profile + logout
        document.getElementById('loginPromptUI').classList.remove('hidden');
        document.getElementById('userProfileContainer').classList.add('hidden');
    }
}

// --- CLOUD SYNC LOGIC ---

const API_URL = "https://temporleapi.onrender.com"; // Replace with your actual Render URL!

// PULL from Cloud (Downloads stats when they log in)
async function pullStatsFromCloud(userId) {
    try {
        const response = await fetch(`${API_URL}/api/profile/${userId}`);
        if (response.ok) {
            // Because we return an object now, we parse as JSON instead of text!
            const cloudData = await response.json(); 
            
            // 1. Restore Endless/Daily Stats
            if (cloudData.statsJson && cloudData.statsJson !== "{}") {
                localStorage.setItem('temporle_stats', cloudData.statsJson);
            }
            
            // 2. Restore Story Campaign!
            if (cloudData.storyJson && cloudData.storyJson !== "{}") {
                localStorage.setItem('temporle_story_save', cloudData.storyJson);
                loadStoryProgress(); // Instantly load it into the game's active memory
            }
            
            console.log("Agent Profile & Campaign Vault synced from cloud.");
        }
    } catch (error) {
        console.error("Failed to pull stats from cloud:", error);
    }
}

// PUSH to Cloud (Uploads stats silently in the background)
async function pushStatsToCloud() {
    // 1. Check if they are actually logged in. If not, do nothing!
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (!session) return; 

    // 2. Grab their current local stats vaults
    const localStats = localStorage.getItem('temporle_stats') || "{}";
    const localStory = localStorage.getItem('temporle_story_save') || "{}"; // <-- Grab Story!

    // 3. Fire it off to your C# backend
    try {
        await fetch(`${API_URL}/api/profile`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: session.user.id,
                statsJson: localStats,
                storyJson: localStory // <-- Send Story!
            })
        });
        console.log("Profile & Campaign securely backed up to cloud vault.");
    } catch (error) {
        console.error("Failed to push stats to cloud:", error);
    }
}

// Log the user out
async function signOutUser() {
    await supabaseClient.auth.signOut();
    checkUserSession(); // Instantly flips the UI back to the login button
}

// Run the check immediately on load
checkUserSession();


const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    function playTone(freq, type, dur) {
        if (audioCtx.state === 'suspended') audioCtx.resume();
        const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain();
        osc.type = type; osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + dur);
        osc.connect(gain); gain.connect(audioCtx.destination);
        osc.start(); osc.stop(audioCtx.currentTime + dur);
    }
    const sfx = {
        scan: () => playTone(600, 'sine', 0.1), err: () => playTone(150, 'sawtooth', 0.3),
        click: () => playTone(800, 'sine', 0.05), win: () => { playTone(400,'sine',0.1); setTimeout(()=>playTone(800,'sine',0.4), 100); }
    };

    const countries = [
        {name: "Afghanistan", lat: 33.93, lon: 67.71}, {name: "Albania", lat: 41.15, lon: 20.17}, {name: "Algeria", lat: 28.03, lon: 1.66},
        {name: "Andorra", lat: 42.50, lon: 1.52}, {name: "Angola", lat: -11.20, lon: 17.87}, {name: "Argentina", lat: -38.42, lon: -63.62},
        {name: "Armenia", lat: 40.06, lon: 45.03}, {name: "Australia", lat: -25.27, lon: 133.78}, {name: "Austria", lat: 47.52, lon: 14.55},
        {name: "Azerbaijan", lat: 40.14, lon: 47.57}, {name: "Bahamas", lat: 25.03, lon: -77.39}, {name: "Bahrain", lat: 26.06, lon: 50.55},
        {name: "Bangladesh", lat: 23.68, lon: 90.35}, {name: "Barbados", lat: 13.19, lon: -59.54}, {name: "Belarus", lat: 53.70, lon: 27.95},
        {name: "Belgium", lat: 50.50, lon: 4.47}, {name: "Belize", lat: 17.18, lon: -88.49}, {name: "Benin", lat: 9.30, lon: 2.31},
        {name: "Bhutan", lat: 27.51, lon: 90.43}, {name: "Bolivia", lat: -16.29, lon: -63.58}, {name: "Bosnia and Herzegovina", lat: 43.91, lon: 17.67},
        {name: "Botswana", lat: -22.32, lon: 24.68}, {name: "Brazil", lat: -14.24, lon: -51.93}, {name: "Brunei", lat: 4.53, lon: 114.72},
        {name: "Bulgaria", lat: 42.73, lon: 25.48}, {name: "Burkina Faso", lat: 12.23, lon: -1.56}, {name: "Burundi", lat: -3.37, lon: 29.91},
        {name: "Cambodia", lat: 12.56, lon: 104.99}, {name: "Cameroon", lat: 7.36, lon: 12.35}, {name: "Canada", lat: 56.13, lon: -106.35},
        {name: "Central African Republic", lat: 6.61, lon: 20.93}, {name: "Chad", lat: 15.45, lon: 18.73}, {name: "Chile", lat: -35.67, lon: -71.54},
        {name: "China", lat: 35.86, lon: 104.19}, {name: "Colombia", lat: 4.57, lon: -74.30}, {name: "Comoros", lat: -11.87, lon: 43.87},
        {name: "Congo (DRC)", lat: -4.03, lon: 21.75}, {name: "Congo (Republic)", lat: -0.22, lon: 15.82}, {name: "Costa Rica", lat: 9.74, lon: -83.75},
        {name: "Croatia", lat: 45.10, lon: 15.20}, {name: "Cuba", lat: 21.52, lon: -77.78}, {name: "Cyprus", lat: 35.12, lon: 33.42},
        {name: "Czech Republic", lat: 49.81, lon: 15.47}, {name: "Denmark", lat: 56.26, lon: 9.50}, {name: "Djibouti", lat: 11.82, lon: 42.59},
        {name: "Dominican Republic", lat: 18.73, lon: -70.16}, {name: "Ecuador", lat: -1.83, lon: -78.18}, {name: "Egypt", lat: 26.82, lon: 30.80},
        {name: "El Salvador", lat: 13.79, lon: -88.89}, {name: "Equatorial Guinea", lat: 1.65, lon: 10.26}, {name: "Eritrea", lat: 15.17, lon: 39.78},
        {name: "Estonia", lat: 58.59, lon: 25.01}, {name: "Ethiopia", lat: 9.14, lon: 40.48}, {name: "Fiji", lat: -17.71, lon: 178.06},
        {name: "Finland", lat: 61.92, lon: 25.74}, {name: "France", lat: 46.22, lon: 2.21}, {name: "Gabon", lat: -0.80, lon: 11.60},
        {name: "Gambia", lat: 13.44, lon: -15.31}, {name: "Georgia", lat: 42.31, lon: 43.35}, {name: "Germany", lat: 51.16, lon: 10.45},
        {name: "Ghana", lat: 7.94, lon: -1.02}, {name: "Greece", lat: 39.07, lon: 21.82}, {name: "Guatemala", lat: 15.78, lon: -90.23},
        {name: "Guinea", lat: 9.94, lon: -9.69}, {name: "Guyana", lat: 4.86, lon: -58.93}, {name: "Haiti", lat: 18.97, lon: -72.28},
        {name: "Honduras", lat: 15.20, lon: -86.24}, {name: "Hungary", lat: 47.16, lon: 19.50}, {name: "Iceland", lat: 64.96, lon: -19.02},
        {name: "India", lat: 20.59, lon: 78.96}, {name: "Indonesia", lat: -0.78, lon: 113.92}, {name: "Iran", lat: 32.42, lon: 53.68},
        {name: "Iraq", lat: 33.22, lon: 43.67}, {name: "Ireland", lat: 53.14, lon: -7.69}, {name: "Israel", lat: 31.04, lon: 34.85},
        {name: "Italy", lat: 41.87, lon: 12.56}, {name: "Ivory Coast", lat: 7.54, lon: -5.54}, {name: "Jamaica", lat: 18.10, lon: -77.29},
        {name: "Japan", lat: 36.20, lon: 138.25}, {name: "Jordan", lat: 30.58, lon: 36.23}, {name: "Kazakhstan", lat: 48.01, lon: 66.92},
        {name: "Kenya", lat: -0.02, lon: 37.90}, {name: "Kuwait", lat: 29.31, lon: 47.48}, {name: "Kyrgyzstan", lat: 41.20, lon: 74.76},
        {name: "Laos", lat: 19.85, lon: 102.49}, {name: "Latvia", lat: 56.87, lon: 24.60}, {name: "Lebanon", lat: 33.85, lon: 35.86},
        {name: "Lesotho", lat: -29.60, lon: 28.23}, {name: "Liberia", lat: 6.42, lon: -9.42}, {name: "Libya", lat: 26.33, lon: 17.22},
        {name: "Lithuania", lat: 55.16, lon: 23.88}, {name: "Luxembourg", lat: 49.81, lon: 6.12}, {name: "Madagascar", lat: -18.76, lon: 46.86},
        {name: "Malawi", lat: -13.25, lon: 34.30}, {name: "Malaysia", lat: 4.21, lon: 101.97}, {name: "Mali", lat: 17.57, lon: -3.99},
        {name: "Malta", lat: 35.93, lon: 14.37}, {name: "Mauritania", lat: 21.00, lon: -10.94}, {name: "Mexico", lat: 23.63, lon: -102.55},
        {name: "Moldova", lat: 47.41, lon: 28.36}, {name: "Mongolia", lat: 46.86, lon: 103.84}, {name: "Montenegro", lat: 42.70, lon: 19.37},
        {name: "Morocco", lat: 31.79, lon: -7.09}, {name: "Mozambique", lat: -18.66, lon: 35.52}, {name: "Myanmar", lat: 21.91, lon: 95.95},
        {name: "Namibia", lat: -22.95, lon: 18.49}, {name: "Nepal", lat: 28.39, lon: 84.12}, {name: "Netherlands", lat: 52.13, lon: 5.29},
        {name: "New Zealand", lat: -40.90, lon: 174.88}, {name: "Nicaragua", lat: 12.86, lon: -85.20}, {name: "Niger", lat: 17.60, lon: 8.08},
        {name: "Nigeria", lat: 9.08, lon: 8.67}, {name: "North Korea", lat: 40.33, lon: 127.51}, {name: "North Macedonia", lat: 41.60, lon: 21.74},
        {name: "Norway", lat: 60.47, lon: 8.46}, {name: "Oman", lat: 21.51, lon: 55.92}, {name: "Pakistan", lat: 30.37, lon: 69.34},
        {name: "Panama", lat: 8.53, lon: -80.78}, {name: "Papua New Guinea", lat: -6.31, lon: 143.95}, {name: "Paraguay", lat: -23.44, lon: -58.44},
        {name: "Peru", lat: -9.18, lon: -75.01}, {name: "Philippines", lat: 12.87, lon: 121.77}, {name: "Poland", lat: 51.91, lon: 19.14},
        {name: "Portugal", lat: 39.39, lon: -8.22}, {name: "Qatar", lat: 25.35, lon: 51.18}, {name: "Romania", lat: 45.94, lon: 24.96},
        {name: "Russia", lat: 61.52, lon: 105.31}, {name: "Rwanda", lat: -1.94, lon: 29.87}, {name: "Saudi Arabia", lat: 23.88, lon: 45.07},
        {name: "Senegal", lat: 14.49, lon: -14.45}, {name: "Serbia", lat: 44.01, lon: 21.00}, {name: "Sierra Leone", lat: 8.46, lon: -11.77},
        {name: "Singapore", lat: 1.35, lon: 103.81}, {name: "Slovakia", lat: 48.66, lon: 19.69}, {name: "Slovenia", lat: 46.15, lon: 14.99},
        {name: "Somalia", lat: 5.15, lon: 46.19}, {name: "South Africa", lat: -30.55, lon: 22.93}, {name: "South Korea", lat: 35.90, lon: 127.76},
        {name: "South Sudan", lat: 6.87, lon: 31.30}, {name: "Spain", lat: 40.46, lon: -3.74}, {name: "Sri Lanka", lat: 7.87, lon: 80.77},
        {name: "Sudan", lat: 12.86, lon: 30.21}, {name: "Suriname", lat: 3.91, lon: -56.02}, {name: "Sweden", lat: 60.12, lon: 18.64},
        {name: "Switzerland", lat: 46.81, lon: 8.22}, {name: "Syria", lat: 34.80, lon: 38.99}, {name: "Taiwan", lat: 23.69, lon: 120.96},
        {name: "Tajikistan", lat: 38.86, lon: 71.27}, {name: "Tanzania", lat: -6.36, lon: 34.88}, {name: "Thailand", lat: 15.87, lon: 100.99},
        {name: "Togo", lat: 8.61, lon: 0.82}, {name: "Tunisia", lat: 33.88, lon: 9.53}, {name: "Turkey", lat: 38.96, lon: 35.24},
        {name: "Turkmenistan", lat: 38.96, lon: 59.55}, {name: "Uganda", lat: 1.37, lon: 32.29}, {name: "Ukraine", lat: 48.37, lon: 31.16},
        {name: "United Arab Emirates", lat: 23.42, lon: 53.84}, {name: "United Kingdom", lat: 55.37, lon: -3.43}, {name: "United States", lat: 37.09, lon: -95.71},
        {name: "Uruguay", lat: -32.52, lon: -55.76}, {name: "Uzbekistan", lat: 41.37, lon: 64.58}, {name: "Venezuela", lat: 6.42, lon: -66.58},
        {name: "Vietnam", lat: 14.05, lon: 108.27}, {name: "Yemen", lat: 15.55, lon: 48.51}, {name: "Zambia", lat: -13.13, lon: 27.84},
        {name: "Zimbabwe", lat: -19.01, lon: 29.15}
    ];

    // --- STORY LEVELS (Expanded & Diversified) ---
    let storyLevels = [
        // Era 1: Origins (3500 BC - 200 BC)
        { year: "3300 BC", name: "Indus Valley Civilization", center: {lat: 27.66, lon: 68.21}, validCountry: "Pakistan", scenario: "Advanced urban planning in the floodplains.", note: "Mohenjo-daro, Pakistan.", continent: "Asia" },
        { year: "3000 BC", name: "Caral-Supe", center: {lat: -10.89, lon: -77.52}, validCountry: "Peru", scenario: "The oldest civilization in the Americas.", note: "Caral, Peru.", continent: "South America" },
        { year: "2500 BC", name: "Old Kingdom Egypt", center: {lat: 29.97, lon: 31.13}, validCountry: "Egypt", scenario: "The Great Pyramid is under construction.", note: "Memphis/Giza, Egypt.", continent: "Africa" },
        { year: "1600 BC", name: "Shang Dynasty", center: {lat: 36.10, lon: 114.39}, validCountry: "China", scenario: "The earliest confirmed dynasty.", note: "Yin (Anyang), China.", continent: "Asia" },
        { year: "1600 BC", name: "Minoan Civilization", center: {lat: 35.30, lon: 25.16}, validCountry: "Greece", scenario: "A palace complex on an island, home of the Minotaur.", note: "Knossos (Crete), Greece.", continent: "Europe" },
        { year: "1200 BC", name: "Olmec Civilization", center: {lat: 18.10, lon: -94.04}, validCountry: "Mexico", scenario: "The 'Rubber People' carve colossal heads.", note: "La Venta, Mexico.", continent: "North America" },
        { year: "814 BC", name: "Carthage (Founding)", center: {lat: 36.85, lon: 10.32}, validCountry: "Tunisia", scenario: "Queen Dido founds a city to rival Rome.", note: "Carthage, Tunisia.", continent: "Africa" },
        { year: "500 BC", name: "Nok Culture", center: {lat: 9.60, lon: 8.00}, validCountry: "Nigeria", scenario: "Terracotta statues appear in West Africa.", note: "Central Nigeria.", continent: "Africa" },
        { year: "480 BC", name: "Achaemenid Empire", center: {lat: 29.93, lon: 52.89}, validCountry: "Iran", scenario: "Xerxes rules the largest empire the world has seen.", note: "Persepolis, Iran.", continent: "Asia" },
        { year: "300 BC", name: "Mauryan Empire", center: {lat: 25.61, lon: 85.11}, validCountry: "India", scenario: "Ashoka the Great spreads Buddhism.", note: "Pataliputra, India.", continent: "Asia" },

        // Era 2: Classical & Medieval (50 AD - 1350 AD)
        { year: "50 AD", name: "Roman Empire", center: {lat: 41.90, lon: 12.49}, validCountry: "Italy", scenario: "The Senate is in session. All roads lead here.", note: "Rome, Italy.", continent: "Europe" },
        { year: "200 AD", name: "Teotihuacan", center: {lat: 19.69, lon: -98.84}, validCountry: "Mexico", scenario: "The City of the Gods dominates the valley.", note: "Teotihuacan, Mexico.", continent: "North America" },
        { year: "400 AD", name: "Kingdom of Aksum", center: {lat: 14.13, lon: 38.72}, validCountry: "Ethiopia", scenario: "A powerful trading empire adopts Christianity.", note: "Aksum, Ethiopia.", continent: "Africa" },
        { year: "550 AD", name: "Byzantine Empire", center: {lat: 41.00, lon: 28.97}, validCountry: "Turkey", scenario: "The Hagia Sophia is built.", note: "Constantinople, Turkey.", continent: "Europe" },
        { year: "650 AD", name: "Umayyad Caliphate", center: {lat: 33.51, lon: 36.29}, validCountry: "Syria", scenario: "The first great Muslim dynasty.", note: "Damascus, Syria.", continent: "Asia" },
        { year: "750 AD", name: "Tang Dynasty", center: {lat: 34.34, lon: 108.93}, validCountry: "China", scenario: "The Golden Age of Asian poetry.", note: "Chang'an, China.", continent: "Asia" },
        { year: "800 AD", name: "Khmer Empire", center: {lat: 13.41, lon: 103.86}, validCountry: "Cambodia", scenario: "A massive temple complex rising from the jungle.", note: "Angkor, Cambodia.", continent: "Asia" },
        { year: "950 AD", name: "Cordoba Caliphate", center: {lat: 37.88, lon: -4.77}, validCountry: "Spain", scenario: "The intellectual center of Europe.", note: "Cordoba, Spain.", continent: "Europe" },
        { year: "1100 AD", name: "Great Zimbabwe", center: {lat: -20.27, lon: 30.93}, validCountry: "Zimbabwe", scenario: "A fortress of stone in Southern Africa.", note: "Great Zimbabwe.", continent: "Africa" },
        { year: "1206 AD", name: "Mongol Empire", center: {lat: 47.91, lon: 106.91}, validCountry: "Mongolia", scenario: "Genghis Khan unites the tribes.", note: "Avarga, Mongolia.", continent: "Asia" },
        { year: "1250 AD", name: "Cahokia", center: {lat: 38.66, lon: -90.06}, validCountry: "United States", scenario: "The largest city north of Mexico.", note: "Cahokia Mounds (Illinois), USA.", continent: "North America" },
        { year: "1324 AD", name: "Mali Empire", center: {lat: 12.6, lon: -8.0}, validCountry: "Mali", scenario: "The richest man in history rules here.", note: "Niani, Mali.", continent: "Africa" },
        { year: "1350 AD", name: "Majapahit Empire", center: {lat: -7.50, lon: 112.40}, validCountry: "Indonesia", scenario: "The spice trade thalassocracy.", note: "Trowulan, Indonesia.", continent: "Asia" },

        // Era 3: Early Modern (1400 AD - 1800 AD)
        { year: "1438 AD", name: "Inca Empire", center: {lat: -13.53, lon: -71.96}, validCountry: "Peru", scenario: "Capital of the Four Suyus high in the Andes.", note: "Cusco, Peru.", continent: "South America" },
        { year: "1450 AD", name: "Kingdom of Kongo", center: {lat: -6.26, lon: 14.24}, validCountry: "Angola", scenario: "A major Christian kingdom in Central Africa.", note: "Mbanza-Kongo, Angola.", continent: "Africa" },
        { year: "1500 AD", name: "Iroquois Confederacy", center: {lat: 43.04, lon: -76.14}, validCountry: "United States", scenario: "The Great Peacemaker unites the Five Nations.", note: "Onondaga (New York), USA.", continent: "North America" },
        { year: "1521 AD", name: "Aztec Empire", center: {lat: 19.43, lon: -99.13}, validCountry: "Mexico", scenario: "A city on a lake, besieged by Cortes.", note: "Tenochtitlan, Mexico.", continent: "North America" },
        { year: "1556 AD", name: "Mughal Empire", center: {lat: 27.17, lon: 78.04}, validCountry: "India", scenario: "Akbar the Great rules a diverse empire.", note: "Agra, India.", continent: "Asia" },
        { year: "1600 AD", name: "Tokugawa Shogunate", center: {lat: 35.67, lon: 139.65}, validCountry: "Japan", scenario: "The Shogun unifies the warring states.", note: "Edo (Tokyo), Japan.", continent: "Asia" },
        { year: "1650 AD", name: "Omani Empire", center: {lat: 23.58, lon: 58.40}, validCountry: "Oman", scenario: "A maritime empire spanning the Indian Ocean.", note: "Muscat, Oman.", continent: "Asia" },
        { year: "1658 AD", name: "Swedish Empire", center: {lat: 59.32, lon: 18.06}, validCountry: "Sweden", scenario: "The Baltic Sea is a Swedish lake.", note: "Stockholm, Sweden.", continent: "Europe" },
        { year: "1721 AD", name: "Russian Empire", center: {lat: 59.93, lon: 30.33}, validCountry: "Russia", scenario: "Peter the Great builds a window to the west.", note: "St. Petersburg, Russia.", continent: "Europe" },
        { year: "1791 AD", name: "Haitian Revolution", center: {lat: 19.76, lon: -72.22}, validCountry: "Haiti", scenario: "The only successful slave revolt in history.", note: "Cap-Haitien, Haiti.", continent: "North America" },

        // Era 4: The 19th Century (1800 AD - 1900 AD)
        { year: "1810 AD", name: "Kingdom of Hawaii", center: {lat: 19.64, lon: -155.99}, validCountry: "United States", scenario: "Kamehameha the Great unites the islands.", note: "Kailua-Kona (Hawaii), USA.", continent: "Oceania" },
        { year: "1812 AD", name: "Napoleonic Empire", center: {lat: 48.85, lon: 2.35}, validCountry: "France", scenario: "La Grande Armée marches east.", note: "Paris, France.", continent: "Europe" },
        { year: "1819 AD", name: "Gran Colombia", center: {lat: 4.60, lon: -74.08}, validCountry: "Colombia", scenario: "Simon Bolivar's dream of a united South America.", note: "Bogota, Colombia.", continent: "South America" },
        { year: "1822 AD", name: "Empire of Brazil", center: {lat: -22.90, lon: -43.17}, validCountry: "Brazil", scenario: "Independence declared from Portugal.", note: "Rio de Janeiro, Brazil.", continent: "South America" },
        { year: "1868 AD", name: "Meiji Restoration", center: {lat: 35.67, lon: 139.65}, validCountry: "Japan", scenario: "The Emperor is restored to power.", note: "Tokyo, Japan.", continent: "Asia" },
        { year: "1871 AD", name: "German Empire", center: {lat: 52.52, lon: 13.40}, validCountry: "Germany", scenario: "The Iron Chancellor unifies the states.", note: "Berlin, Germany.", continent: "Europe" },
        { year: "1880 AD", name: "British Empire", center: {lat: 51.50, lon: -0.12}, validCountry: "United Kingdom", scenario: "The sun never sets on this Queen's reign.", note: "London, UK.", continent: "Europe" },
        { year: "1896 AD", name: "Ethiopian Empire", center: {lat: 9.03, lon: 38.74}, validCountry: "Ethiopia", scenario: "Defeating a colonial invasion at Adwa.", note: "Addis Ababa, Ethiopia.", continent: "Africa" },

        // Era 5: The 20th Century (1900 AD - 2000 AD)
        { year: "1900 AD", name: "Qing Dynasty", center: {lat: 39.90, lon: 116.40}, validCountry: "China", scenario: "The Boxer Rebellion siege.", note: "Beijing, China.", continent: "Asia" },
        { year: "1910 AD", name: "Mexican Revolution", center: {lat: 19.43, lon: -99.13}, validCountry: "Mexico", scenario: "Pancho Villa and Zapata rise up.", note: "Mexico City.", continent: "North America" },
        { year: "1922 AD", name: "Soviet Union", center: {lat: 55.75, lon: 37.61}, validCountry: "Russia", scenario: "The Hammer and Sickle rises.", note: "Moscow, Russia.", continent: "Europe" },
        { year: "1947 AD", name: "Partition of India", center: {lat: 28.61, lon: 77.20}, validCountry: "India", scenario: "Independence from the Raj.", note: "New Delhi, India.", continent: "Asia" },
        { year: "1950 AD", name: "Korean War", center: {lat: 37.56, lon: 126.97}, validCountry: "South Korea", scenario: "Conflict erupts on the peninsula.", note: "Seoul, South Korea.", continent: "Asia" },
        { year: "1960 AD", name: "Year of Africa", center: {lat: 5.60, lon: -0.18}, validCountry: "Ghana", scenario: "Kwame Nkrumah leads the Pan-African movement.", note: "Accra, Ghana.", continent: "Africa" },
        { year: "1962 AD", name: "Cuban Missile Crisis", center: {lat: 23.11, lon: -82.36}, validCountry: "Cuba", scenario: "Missiles spotted 90 miles from Florida.", note: "Havana, Cuba.", continent: "North America" },
        { year: "1979 AD", name: "Iranian Revolution", center: {lat: 35.68, lon: 51.38}, validCountry: "Iran", scenario: "The Shah is overthrown.", note: "Tehran, Iran.", continent: "Asia" },
        { year: "1989 AD", name: "Fall of Berlin Wall", center: {lat: 52.52, lon: 13.40}, validCountry: "Germany", scenario: "The Iron Curtain cracks.", note: "Berlin, Germany.", continent: "Europe" },
        { year: "1994 AD", name: "End of Apartheid", center: {lat: -25.74, lon: 28.18}, validCountry: "South Africa", scenario: "Mandela elected President.", note: "Pretoria, South Africa.", continent: "Africa" }
    ];

    // --- 130 DAILY LEVELS (Random Events) ---
    let dailyLevels = [
        // Original 30
        { year: "1969 AD", name: "Apollo 11", center: {lat: 29.55, lon: -95.09}, validCountry: "United States", scenario: "'Houston, the Eagle has landed.'", note: "Johnson Space Center, Houston.", continent: "North America" },
        { year: "1789 AD", name: "French Revolution", center: {lat: 48.85, lon: 2.35}, validCountry: "France", scenario: "The Bastille is stormed.", note: "Paris, France.", continent: "Europe" },
        { year: "1912 AD", name: "RMS Titanic", center: {lat: 50.90, lon: -1.40}, validCountry: "United Kingdom", scenario: "The ship departs on its maiden voyage.", note: "Southampton, UK.", continent: "Europe" },
        { year: "1986 AD", name: "Chernobyl Disaster", center: {lat: 51.27, lon: 30.22}, validCountry: "Ukraine", scenario: "Reactor 4 suffers catastrophic failure.", note: "Pripyat, Ukraine.", continent: "Europe" },
        { year: "79 AD", name: "Eruption of Vesuvius", center: {lat: 40.75, lon: 14.48}, validCountry: "Italy", scenario: "Ash buries the city of Pompeii.", note: "Pompeii, Italy.", continent: "Europe" },
        { year: "1215 AD", name: "Magna Carta", center: {lat: 51.44, lon: -0.56}, validCountry: "United Kingdom", scenario: "King John signs the charter of liberties.", note: "Runnymede, UK.", continent: "Europe" },
        { year: "1453 AD", name: "Fall of Constantinople", center: {lat: 41.00, lon: 28.97}, validCountry: "Turkey", scenario: "The end of the Medieval period.", note: "Istanbul, Turkey.", continent: "Asia" },
        { year: "1903 AD", name: "First Flight", center: {lat: 36.01, lon: -75.66}, validCountry: "United States", scenario: "The Wright brothers take to the skies.", note: "Kitty Hawk, NC, USA.", continent: "North America" },
        { year: "1815 AD", name: "Battle of Waterloo", center: {lat: 50.68, lon: 4.41}, validCountry: "Belgium", scenario: "Napoleon's final defeat.", note: "Waterloo, Belgium.", continent: "Europe" },
        { year: "1963 AD", name: "JFK Assassination", center: {lat: 32.77, lon: -96.79}, validCountry: "United States", scenario: "A motorcade in Dealey Plaza.", note: "Dallas, USA.", continent: "North America" },
        { year: "1994 AD", name: "End of Apartheid", center: {lat: -25.74, lon: 28.18}, validCountry: "South Africa", scenario: "Mandela elected President.", note: "Pretoria, South Africa.", continent: "Africa" },
        { year: "1883 AD", name: "Krakatoa Eruption", center: {lat: -6.10, lon: 105.42}, validCountry: "Indonesia", scenario: "The loudest sound in recorded history.", note: "Krakatoa, Indonesia.", continent: "Asia" },
        { year: "1953 AD", name: "Mt Everest Summit", center: {lat: 27.98, lon: 86.92}, validCountry: "Nepal", scenario: "Hillary and Norgay reach the roof of the world.", note: "Himalayas, Nepal.", continent: "Asia" },
        { year: "1517 AD", name: "The Reformation", center: {lat: 51.86, lon: 12.64}, validCountry: "Germany", scenario: "95 Theses nailed to a church door.", note: "Wittenberg, Germany.", continent: "Europe" },
        { year: "1914 AD", name: "Archduke Assassination", center: {lat: 43.85, lon: 18.41}, validCountry: "Bosnia and Herzegovina", scenario: "The spark that started World War I.", note: "Sarajevo, Bosnia.", continent: "Europe" },
        { year: "1944 AD", name: "D-Day", center: {lat: 49.33, lon: -0.60}, validCountry: "France", scenario: "Allied forces storm Omaha Beach.", note: "Normandy, France.", continent: "Europe" },
        { year: "1967 AD", name: "Six-Day War", center: {lat: 31.76, lon: 35.21}, validCountry: "Israel", scenario: "Conflict reshapes the Middle East map.", note: "Jerusalem, Israel.", continent: "Asia" },
        { year: "1848 AD", name: "California Gold Rush", center: {lat: 38.58, lon: -121.49}, validCountry: "United States", scenario: "Sutter's Mill sparks a migration.", note: "Sacramento, USA.", continent: "North America" },
        { year: "1957 AD", name: "Sputnik 1", center: {lat: 45.92, lon: 63.34}, validCountry: "Kazakhstan", scenario: "The Space Age begins.", note: "Baikonur Cosmodrome, Kazakhstan.", continent: "Asia" },
        { year: "1980 AD", name: "Solidarity Movement", center: {lat: 54.35, lon: 18.64}, validCountry: "Poland", scenario: "Strike at the Lenin Shipyard.", note: "Gdansk, Poland.", continent: "Europe" },
        { year: "1805 AD", name: "Battle of Trafalgar", center: {lat: 36.18, lon: -6.03}, validCountry: "Spain", scenario: "Nelson defeats the combined fleet.", note: "Cape Trafalgar, Spain.", continent: "Europe" },
        { year: "1776 AD", name: "Declaration of Independence", center: {lat: 39.95, lon: -75.16}, validCountry: "United States", scenario: "A new nation breaks from the Crown.", note: "Philadelphia, USA.", continent: "North America" },
        { year: "1911 AD", name: "Machu Picchu Discovered", center: {lat: -13.16, lon: -72.54}, validCountry: "Peru", scenario: "Bingham reveals the Lost City.", note: "Andes Mountains, Peru.", continent: "South America" },
        { year: "1099 AD", name: "First Crusade", center: {lat: 31.76, lon: 35.21}, validCountry: "Israel", scenario: "The siege of the Holy City.", note: "Jerusalem, Israel.", continent: "Asia" },
        { year: "1869 AD", name: "Suez Canal Opens", center: {lat: 30.58, lon: 32.27}, validCountry: "Egypt", scenario: "Connecting the Mediterranean and Red Sea.", note: "Suez, Egypt.", continent: "Africa" },
        { year: "1997 AD", name: "Handover of Hong Kong", center: {lat: 22.31, lon: 114.16}, validCountry: "China", scenario: "The end of the British Empire in Asia.", note: "Hong Kong, China.", continent: "Asia" },
        { year: "1929 AD", name: "Wall Street Crash", center: {lat: 40.71, lon: -74.00}, validCountry: "United States", scenario: "Black Tuesday triggers the Great Depression.", note: "New York City, USA.", continent: "North America" },
        { year: "1901 AD", name: "First Nobel Prizes", center: {lat: 59.32, lon: 18.06}, validCountry: "Sweden", scenario: "Awards established by the inventor of dynamite.", note: "Stockholm, Sweden.", continent: "Europe" },
        { year: "1979 AD", name: "Iranian Revolution", center: {lat: 35.68, lon: 51.38}, validCountry: "Iran", scenario: "The Shah is overthrown.", note: "Tehran, Iran.", continent: "Asia" },

        // South & Central America
        { year: "100 BC", name: "Nazca Lines", center: {lat: -14.73, lon: -75.13}, validCountry: "Peru", scenario: "Massive geoglyphs are carved into the desert floor.", note: "Nazca Desert, Peru.", continent: "South America" },
        { year: "600 AD", name: "Tiwanaku Empire", center: {lat: -16.55, lon: -68.67}, validCountry: "Bolivia", scenario: "A high-altitude civilization dominates the Andes.", note: "Lake Titicaca, Bolivia.", continent: "South America" },
        { year: "1532 AD", name: "Muisca Confederation", center: {lat: 4.60, lon: -74.08}, validCountry: "Colombia", scenario: "The legend of El Dorado originates here.", note: "Bogota, Colombia.", continent: "South America" },
        { year: "1550 AD", name: "Mapuche Resistance", center: {lat: -38.73, lon: -72.59}, validCountry: "Chile", scenario: "Indigenous forces successfully repel European invaders.", note: "Araucania, Chile.", continent: "South America" },
        { year: "1824 AD", name: "Battle of Ayacucho", center: {lat: -13.16, lon: -74.22}, validCountry: "Peru", scenario: "The decisive battle for South American independence.", note: "Ayacucho, Peru.", continent: "South America" },
        { year: "1914 AD", name: "Panama Canal Opens", center: {lat: 9.14, lon: -79.72}, validCountry: "Panama", scenario: "The Atlantic and Pacific oceans are finally connected.", note: "Panama Canal.", continent: "North America" },
        { year: "1982 AD", name: "Falklands War", center: {lat: -51.69, lon: -57.85}, validCountry: "Argentina", scenario: "A territorial conflict over South Atlantic islands.", note: "Falkland Islands/Malvinas.", continent: "South America" },
        { year: "1536 AD", name: "Founding of Buenos Aires", center: {lat: -34.60, lon: -58.38}, validCountry: "Argentina", scenario: "Spanish colonizers establish a port on the Rio de la Plata.", note: "Buenos Aires, Argentina.", continent: "South America" },
        { year: "1889 AD", name: "Republic of Brazil", center: {lat: -15.79, lon: -47.88}, validCountry: "Brazil", scenario: "The monarchy is overthrown by a military coup.", note: "Rio de Janeiro, Brazil.", continent: "South America" },
        { year: "1960 AD", name: "Brasília Inaugurated", center: {lat: -15.79, lon: -47.86}, validCountry: "Brazil", scenario: "A modernist capital city is built from scratch.", note: "Brasília, Brazil.", continent: "South America" },

        // Africa
        { year: "1492 AD", name: "Songhai Empire", center: {lat: 16.27, lon: -0.05}, validCountry: "Mali", scenario: "Askia the Great expands the empire to its zenith.", note: "Gao, Mali.", continent: "Africa" },
        { year: "1700 AD", name: "Ashanti Empire", center: {lat: 6.68, lon: -1.62}, validCountry: "Ghana", scenario: "The Golden Stool unites a powerful West African state.", note: "Kumasi, Ghana.", continent: "Africa" },
        { year: "1879 AD", name: "Battle of Isandlwana", center: {lat: -28.35, lon: 30.65}, validCountry: "South Africa", scenario: "Zulu warriors defeat the British army.", note: "KwaZulu-Natal, South Africa.", continent: "Africa" },
        { year: "200 BC", name: "Kingdom of Kush", center: {lat: 16.93, lon: 33.74}, validCountry: "Sudan", scenario: "The Black Pharaohs rule from their desert pyramids.", note: "Meroë, Sudan.", continent: "Africa" },
        { year: "1800 AD", name: "Dahomey Amazons", center: {lat: 7.18, lon: 1.99}, validCountry: "Benin", scenario: "An all-female military regiment defends the kingdom.", note: "Abomey, Benin.", continent: "Africa" },
        { year: "1300 AD", name: "Kilwa Sultanate", center: {lat: -8.95, lon: 39.50}, validCountry: "Tanzania", scenario: "A wealthy Swahili city-state dominates Indian Ocean trade.", note: "Kilwa Kisiwani, Tanzania.", continent: "Africa" },
        { year: "1652 AD", name: "Cape Colony Founded", center: {lat: -33.92, lon: 18.42}, validCountry: "South Africa", scenario: "The Dutch East India Company establishes a supply station.", note: "Cape Town, South Africa.", continent: "Africa" },
        { year: "1956 AD", name: "Suez Crisis", center: {lat: 30.58, lon: 32.27}, validCountry: "Egypt", scenario: "An international dispute over a vital canal.", note: "Suez, Egypt.", continent: "Africa" },
        { year: "1994 AD", name: "Rwandan Tragedy", center: {lat: -1.94, lon: 29.87}, validCountry: "Rwanda", scenario: "A nation falls into horrific sectarian violence.", note: "Kigali, Rwanda.", continent: "Africa" },
        { year: "1898 AD", name: "Fashoda Incident", center: {lat: 9.88, lon: 32.05}, validCountry: "South Sudan", scenario: "British and French colonial empires clash.", note: "Kodok, South Sudan.", continent: "Africa" },

        // Middle East & Central Asia
        { year: "3000 BC", name: "Elamite Empire", center: {lat: 32.03, lon: 48.29}, validCountry: "Iran", scenario: "One of the earliest civilizations arises east of Sumer.", note: "Susa, Iran.", continent: "Asia" },
        { year: "250 BC", name: "Nabataean Kingdom", center: {lat: 30.32, lon: 35.44}, validCountry: "Jordan", scenario: "A desert capital carved directly into rose-red cliffs.", note: "Petra, Jordan.", continent: "Asia" },
        { year: "224 AD", name: "Sassanid Empire", center: {lat: 33.09, lon: 44.58}, validCountry: "Iraq", scenario: "The last pre-Islamic Persian empire builds its capital.", note: "Ctesiphon, Iraq.", continent: "Asia" },
        { year: "1037 AD", name: "Seljuk Empire", center: {lat: 35.68, lon: 51.38}, validCountry: "Iran", scenario: "Turkic nomads establish a vast empire.", note: "Rayy/Tehran, Iran.", continent: "Asia" },
        { year: "1501 AD", name: "Safavid Dynasty", center: {lat: 38.07, lon: 46.29}, validCountry: "Iran", scenario: "Shia Islam is established as the state religion.", note: "Tabriz, Iran.", continent: "Asia" },
        { year: "1979 AD", name: "Soviet-Afghan War", center: {lat: 34.52, lon: 69.17}, validCountry: "Afghanistan", scenario: "A superpower invades the Graveyard of Empires.", note: "Kabul, Afghanistan.", continent: "Asia" },
        { year: "1948 AD", name: "Creation of Israel", center: {lat: 32.08, lon: 34.78}, validCountry: "Israel", scenario: "David Ben-Gurion declares a new state.", note: "Tel Aviv, Israel.", continent: "Asia" },
        { year: "1990 AD", name: "Gulf War Begins", center: {lat: 29.37, lon: 47.97}, validCountry: "Kuwait", scenario: "Iraqi forces cross the southern border.", note: "Kuwait City, Kuwait.", continent: "Asia" },
        { year: "1923 AD", name: "Republic of Turkey", center: {lat: 39.92, lon: 32.85}, validCountry: "Turkey", scenario: "Atatürk establishes a modern secular state.", note: "Ankara, Turkey.", continent: "Asia" },
        { year: "1398 AD", name: "Sack of Delhi", center: {lat: 28.61, lon: 77.20}, validCountry: "India", scenario: "Timur invades the Delhi Sultanate.", note: "Delhi, India.", continent: "Asia" },

        // South & Southeast Asia
        { year: "1025 AD", name: "Chola Dynasty", center: {lat: 10.79, lon: 79.13}, validCountry: "India", scenario: "A southern Indian empire launches a naval invasion.", note: "Thanjavur, India.", continent: "Asia" },
        { year: "320 AD", name: "Gupta Empire", center: {lat: 25.59, lon: 85.13}, validCountry: "India", scenario: "The Golden Age of Indian science and mathematics.", note: "Pataliputra, India.", continent: "Asia" },
        { year: "1674 AD", name: "Maratha Empire", center: {lat: 18.52, lon: 73.85}, validCountry: "India", scenario: "Shivaji establishes a Hindu warrior state.", note: "Pune, India.", continent: "Asia" },
        { year: "700 AD", name: "Srivijaya Empire", center: {lat: -2.99, lon: 104.75}, validCountry: "Indonesia", scenario: "A maritime empire controls the Strait of Malacca.", note: "Palembang, Indonesia.", continent: "Asia" },
        { year: "1350 AD", name: "Ayutthaya Kingdom", center: {lat: 14.35, lon: 100.56}, validCountry: "Thailand", scenario: "A powerful Siamese kingdom flourishes.", note: "Ayutthaya, Thailand.", continent: "Asia" },
        { year: "1550 AD", name: "Toungoo Dynasty", center: {lat: 18.93, lon: 96.43}, validCountry: "Myanmar", scenario: "The largest empire in Southeast Asian history.", note: "Bago, Myanmar.", continent: "Asia" },
        { year: "1000 AD", name: "Champa Kingdom", center: {lat: 15.87, lon: 108.33}, validCountry: "Vietnam", scenario: "An ancient maritime culture builds Hindu temples.", note: "My Son, Vietnam.", continent: "Asia" },
        { year: "1947 AD", name: "Partition of India", center: {lat: 31.52, lon: 74.35}, validCountry: "Pakistan", scenario: "Mass migration follows the end of British rule.", note: "Lahore, Pakistan.", continent: "Asia" },
        { year: "1971 AD", name: "Bangladesh Liberation", center: {lat: 23.81, lon: 90.41}, validCountry: "Bangladesh", scenario: "East Pakistan fights for independence.", note: "Dhaka, Bangladesh.", continent: "Asia" },
        { year: "1565 AD", name: "Spanish Philippines", center: {lat: 10.31, lon: 123.89}, validCountry: "Philippines", scenario: "The first Spanish settlement in the archipelago.", note: "Cebu, Philippines.", continent: "Asia" },

        // East Asia
        { year: "221 BC", name: "Qin Dynasty", center: {lat: 34.26, lon: 108.93}, validCountry: "China", scenario: "The first Emperor unifies the warring states.", note: "Xi'an, China.", continent: "Asia" },
        { year: "400 AD", name: "Goguryeo Kingdom", center: {lat: 39.03, lon: 125.75}, validCountry: "North Korea", scenario: "A powerful ancient Korean kingdom peaks.", note: "Pyongyang, North Korea.", continent: "Asia" },
        { year: "794 AD", name: "Heian Period", center: {lat: 35.01, lon: 135.76}, validCountry: "Japan", scenario: "A golden age of Japanese art and literature begins.", note: "Kyoto, Japan.", continent: "Asia" },
        { year: "1368 AD", name: "Ming Dynasty", center: {lat: 32.06, lon: 118.79}, validCountry: "China", scenario: "The Mongols are expelled; Chinese rule is restored.", note: "Nanjing, China.", continent: "Asia" },
        { year: "1274 AD", name: "Mongol Invasions of Japan", center: {lat: 33.59, lon: 130.40}, validCountry: "Japan", scenario: "The Kamikaze (divine wind) destroys a massive fleet.", note: "Fukuoka/Hakata Bay, Japan.", continent: "Asia" },
        { year: "1644 AD", name: "Fall of Beijing", center: {lat: 39.90, lon: 116.40}, validCountry: "China", scenario: "Manchu forces breach the Great Wall.", note: "Beijing, China.", continent: "Asia" },
        { year: "1945 AD", name: "Hiroshima", center: {lat: 34.38, lon: 132.45}, validCountry: "Japan", scenario: "The first deployment of an atomic weapon.", note: "Hiroshima, Japan.", continent: "Asia" },
        { year: "1950 AD", name: "Battle of Inchon", center: {lat: 37.45, lon: 126.63}, validCountry: "South Korea", scenario: "A daring amphibious landing changes the Korean War.", note: "Incheon, South Korea.", continent: "Asia" },
        { year: "649 AD", name: "Tibetan Empire", center: {lat: 29.65, lon: 91.11}, validCountry: "China", scenario: "Songtsen Gampo establishes a powerful highland state.", note: "Lhasa, Tibet.", continent: "Asia" },
        { year: "1949 AD", name: "Retreat to Taiwan", center: {lat: 25.03, lon: 121.56}, validCountry: "Taiwan", scenario: "Nationalist forces flee the mainland.", note: "Taipei, Taiwan.", continent: "Asia" },

        // Eastern Europe & Russia
        { year: "882 AD", name: "Kievan Rus", center: {lat: 50.45, lon: 30.52}, validCountry: "Ukraine", scenario: "Oleg of Novgorod unifies the eastern Slavs.", note: "Kyiv, Ukraine.", continent: "Europe" },
        { year: "1569 AD", name: "Polish-Lithuanian Commonwealth", center: {lat: 51.22, lon: 22.56}, validCountry: "Poland", scenario: "The Union of Lublin creates a massive dual state.", note: "Lublin, Poland.", continent: "Europe" },
        { year: "1462 AD", name: "Wallachia", center: {lat: 44.93, lon: 25.45}, validCountry: "Romania", scenario: "Vlad the Impaler launches the Night Attack.", note: "Targoviste, Romania.", continent: "Europe" },
        { year: "893 AD", name: "First Bulgarian Empire", center: {lat: 43.20, lon: 26.93}, validCountry: "Bulgaria", scenario: "The Cyrillic alphabet is developed.", note: "Preslav, Bulgaria.", continent: "Europe" },
        { year: "1526 AD", name: "Battle of Mohács", center: {lat: 45.99, lon: 18.68}, validCountry: "Hungary", scenario: "The Kingdom of Hungary falls to the Ottomans.", note: "Mohács, Hungary.", continent: "Europe" },
        { year: "1917 AD", name: "Russian Revolution", center: {lat: 59.93, lon: 30.33}, validCountry: "Russia", scenario: "The Bolsheviks storm the Winter Palace.", note: "St. Petersburg, Russia.", continent: "Europe" },
        { year: "1943 AD", name: "Battle of Stalingrad", center: {lat: 48.70, lon: 44.51}, validCountry: "Russia", scenario: "The turning point of the Eastern Front.", note: "Volgograd, Russia.", continent: "Europe" },
        { year: "1991 AD", name: "Breakup of Yugoslavia", center: {lat: 44.78, lon: 20.44}, validCountry: "Serbia", scenario: "A federal republic fragments into civil war.", note: "Belgrade, Serbia.", continent: "Europe" },
        { year: "1410 AD", name: "Battle of Grunwald", center: {lat: 53.48, lon: 20.12}, validCountry: "Poland", scenario: "Teutonic Knights are decisively defeated.", note: "Grunwald, Poland.", continent: "Europe" },
        { year: "1989 AD", name: "Velvet Revolution", center: {lat: 50.07, lon: 14.43}, validCountry: "Czech Republic", scenario: "A non-violent transition of power.", note: "Prague, Czech Republic.", continent: "Europe" },

        // Western & Northern Europe
        { year: "410 AD", name: "Sack of Rome", center: {lat: 41.90, lon: 12.49}, validCountry: "Italy", scenario: "Visigoths breach the Eternal City.", note: "Rome, Italy.", continent: "Europe" },
        { year: "732 AD", name: "Battle of Tours", center: {lat: 47.39, lon: 0.68}, validCountry: "France", scenario: "Charles Martel halts the Umayyad advance.", note: "Tours, France.", continent: "Europe" },
        { year: "793 AD", name: "Viking Age Begins", center: {lat: 55.67, lon: -1.79}, validCountry: "United Kingdom", scenario: "Norse raiders attack a peaceful monastery.", note: "Lindisfarne, UK.", continent: "Europe" },
        { year: "1066 AD", name: "Battle of Hastings", center: {lat: 50.91, lon: 0.48}, validCountry: "United Kingdom", scenario: "The Norman conquest of England.", note: "Hastings, UK.", continent: "Europe" },
        { year: "1397 AD", name: "Kalmar Union", center: {lat: 56.66, lon: 16.31}, validCountry: "Sweden", scenario: "Three Nordic kingdoms are unified under one monarch.", note: "Kalmar, Sweden.", continent: "Europe" },
        { year: "1204 AD", name: "Venetian Republic", center: {lat: 45.44, lon: 12.31}, validCountry: "Italy", scenario: "A maritime powerhouse redirects the Fourth Crusade.", note: "Venice, Italy.", continent: "Europe" },
        { year: "1492 AD", name: "Reconquista", center: {lat: 37.17, lon: -3.59}, validCountry: "Spain", scenario: "The fall of the Emirate of Granada.", note: "Granada, Spain.", continent: "Europe" },
        { year: "1648 AD", name: "Peace of Westphalia", center: {lat: 51.96, lon: 7.62}, validCountry: "Germany", scenario: "The Thirty Years' War finally ends.", note: "Münster, Germany.", continent: "Europe" },
        { year: "1916 AD", name: "Easter Rising", center: {lat: 53.34, lon: -6.26}, validCountry: "Ireland", scenario: "An armed insurrection for Irish independence.", note: "Dublin, Ireland.", continent: "Europe" },
        { year: "1940 AD", name: "Dunkirk Evacuation", center: {lat: 51.03, lon: 2.37}, validCountry: "France", scenario: "Allied forces are rescued by a civilian flotilla.", note: "Dunkirk, France.", continent: "Europe" },

        // Global Expeditions & Colonial Events
        { year: "1520 AD", name: "Strait of Magellan", center: {lat: -53.16, lon: -70.91}, validCountry: "Chile", scenario: "A treacherous navigable route is discovered.", note: "Punta Arenas, Chile.", continent: "South America" },
        { year: "1488 AD", name: "Cape of Good Hope", center: {lat: -34.35, lon: 18.47}, validCountry: "South Africa", scenario: "Dias rounds the southern tip of Africa.", note: "Cape Peninsula, South Africa.", continent: "Africa" },
        { year: "1607 AD", name: "Jamestown Settlement", center: {lat: 37.21, lon: -76.77}, validCountry: "United States", scenario: "The first permanent English settlement in the Americas.", note: "Virginia, USA.", continent: "North America" },
        { year: "1788 AD", name: "First Fleet", center: {lat: -33.98, lon: 151.22}, validCountry: "Australia", scenario: "A penal colony is established in Botany Bay.", note: "Sydney, Australia.", continent: "Oceania" },
        { year: "1200 AD", name: "Rapa Nui", center: {lat: -27.11, lon: -109.36}, validCountry: "Chile", scenario: "Polynesians begin carving massive Moai statues.", note: "Easter Island, Chile.", continent: "Oceania" },
        { year: "1835 AD", name: "Voyage of the Beagle", center: {lat: -0.77, lon: -90.31}, validCountry: "Ecuador", scenario: "Charles Darwin observes unique wildlife.", note: "Galapagos Islands, Ecuador.", continent: "South America" },
        { year: "1869 AD", name: "Golden Spike", center: {lat: 41.61, lon: -112.55}, validCountry: "United States", scenario: "The First Transcontinental Railroad is completed.", note: "Promontory, Utah, USA.", continent: "North America" },
        { year: "1904 AD", name: "Trans-Siberian Railway", center: {lat: 43.11, lon: 131.88}, validCountry: "Russia", scenario: "The longest railway line in the world is finished.", note: "Vladivostok, Russia.", continent: "Europe/Asia" },
        { year: "1840 AD", name: "Treaty of Waitangi", center: {lat: -35.28, lon: 174.08}, validCountry: "New Zealand", scenario: "A foundational document is signed with the Māori.", note: "Waitangi, New Zealand.", continent: "Oceania" },
        { year: "1791 AD", name: "Discovery of Antarctica", center: {lat: -77.84, lon: 166.68}, validCountry: "New Zealand", scenario: "Early expeditions push toward the icy continent.", note: "Ross Island Base.", continent: "Antarctica" },

        // 19th & 20th Century Conflicts
        { year: "1836 AD", name: "Battle of the Alamo", center: {lat: 29.42, lon: -98.48}, validCountry: "United States", scenario: "Texian defenders hold out against Santa Anna.", note: "San Antonio, Texas, USA.", continent: "North America" },
        { year: "1839 AD", name: "First Opium War", center: {lat: 23.12, lon: 113.26}, validCountry: "China", scenario: "A conflict over trade and sovereignty begins.", note: "Guangzhou, China.", continent: "Asia" },
        { year: "1853 AD", name: "Crimean War", center: {lat: 44.61, lon: 33.52}, validCountry: "Ukraine", scenario: "A siege defines early modern warfare.", note: "Sevastopol, Ukraine.", continent: "Europe" },
        { year: "1899 AD", name: "Second Boer War", center: {lat: -25.74, lon: 28.18}, validCountry: "South Africa", scenario: "Guerrilla warfare erupts over gold and independence.", note: "Pretoria, South Africa.", continent: "Africa" },
        { year: "1915 AD", name: "Gallipoli Campaign", center: {lat: 40.24, lon: 26.27}, validCountry: "Turkey", scenario: "An amphibious assault faces fierce Ottoman defense.", note: "Gallipoli Peninsula, Turkey.", continent: "Europe/Asia" },
        { year: "1936 AD", name: "Spanish Civil War", center: {lat: 40.41, lon: -3.70}, validCountry: "Spain", scenario: "A brutal prelude to the Second World War.", note: "Madrid, Spain.", continent: "Europe" },
        { year: "1941 AD", name: "Pearl Harbor", center: {lat: 21.36, lon: -157.95}, validCountry: "United States", scenario: "A surprise aerial attack forces America into war.", note: "Honolulu, Hawaii, USA.", continent: "North America" },
        { year: "1954 AD", name: "Battle of Dien Bien Phu", center: {lat: 21.38, lon: 103.01}, validCountry: "Vietnam", scenario: "French colonial rule in Indochina ends.", note: "Dien Bien Phu, Vietnam.", continent: "Asia" },
        { year: "1959 AD", name: "Cuban Revolution", center: {lat: 23.11, lon: -82.36}, validCountry: "Cuba", scenario: "Fidel Castro overthrows the Batista government.", note: "Havana, Cuba.", continent: "North America" },
        { year: "1975 AD", name: "Fall of Saigon", center: {lat: 10.76, lon: 106.66}, validCountry: "Vietnam", scenario: "Helicopters evacuate the embassy roof.", note: "Ho Chi Minh City, Vietnam.", continent: "Asia" }
    ];

    // --- 100 LEVEL EXPANSION PACK (No-Spoiler Hints & Diverse Countries) ---
    const expansionPack = [
        // North America & Caribbean
        { year: "1000 AD", name: "L'Anse aux Meadows", center: {lat: 51.59, lon: -55.53}, validCountry: "Canada", scenario: "Norse explorers establish a temporary settlement on a frozen northern coast.", note: "Newfoundland.", continent: "North America" },
        { year: "1896 AD", name: "Klondike Gold Rush", center: {lat: 64.06, lon: -139.43}, validCountry: "Canada", scenario: "Over 100,000 prospectors migrate to a remote northwestern territory.", note: "Yukon Territory.", continent: "North America" },
        { year: "1810 AD", name: "Cry of Dolores", center: {lat: 21.03, lon: -100.93}, validCountry: "Mexico", scenario: "A local priest rings his church bell, sparking a war for independence.", note: "Guanajuato.", continent: "North America" },
        { year: "600 AD", name: "Palenque Flourishes", center: {lat: 17.48, lon: -92.04}, validCountry: "Mexico", scenario: "A powerful Mesoamerican city-state reaches its architectural peak.", note: "Chiapas jungle.", continent: "North America" },
        { year: "250 AD", name: "Tikal Dominance", center: {lat: 17.22, lon: -89.62}, validCountry: "Guatemala", scenario: "A massive rainforest metropolis dominates the classical Maya period.", note: "Peten Basin.", continent: "North America" },
        { year: "1200 BC", name: "Caracol Settlement", center: {lat: 16.76, lon: -89.11}, validCountry: "Belize", scenario: "An ancient civilization begins carving terraces into the Maya Mountains.", note: "Cayo District.", continent: "North America" },
        { year: "426 AD", name: "Copan Dynasty", center: {lat: 14.83, lon: -89.14}, validCountry: "Honduras", scenario: "A royal dynasty is founded in a valley famous for its intricate stele sculptures.", note: "Copan River valley.", continent: "North America" },
        { year: "590 AD", name: "Joya de Ceren", center: {lat: 13.82, lon: -89.35}, validCountry: "El Salvador", scenario: "A farming village is perfectly preserved under layers of volcanic ash.", note: "The Pompeii of the Americas.", continent: "North America" },
        { year: "1500 BC", name: "Diquis Spheres", center: {lat: 8.90, lon: -83.33}, validCountry: "Costa Rica", scenario: "Indigenous cultures craft perfectly round stone petrospheres.", note: "Diquis Delta.", continent: "North America" },
        { year: "1692 AD", name: "Port Royal Earthquake", center: {lat: 17.93, lon: -76.84}, validCountry: "Jamaica", scenario: "A notorious pirate haven sinks into the sea after a massive tremor.", note: "Caribbean Sea.", continent: "North America" },
        { year: "1493 AD", name: "La Isabela Founded", center: {lat: 19.88, lon: -71.08}, validCountry: "Dominican Republic", scenario: "The first permanent European settlement in the Americas is established.", note: "Hispaniola.", continent: "North America" },
        { year: "1492 AD", name: "Guanahani Landfall", center: {lat: 24.03, lon: -74.48}, validCountry: "Bahamas", scenario: "Three European ships make first contact with the Lucayan people.", note: "San Salvador Island.", continent: "North America" },

        // South America
        { year: "1911 AD", name: "Discovery of Machu Picchu", center: {lat: -13.16, lon: -72.54}, validCountry: "Peru", scenario: "An explorer reveals an intact, high-altitude citadel to the outside world.", note: "Andes Mountains.", continent: "South America" },
        { year: "1545 AD", name: "Cerro Rico Silver", center: {lat: -19.61, lon: -65.75}, validCountry: "Bolivia", scenario: "A massive silver vein is discovered, changing the global economy forever.", note: "Potosi.", continent: "South America" },
        { year: "1538 AD", name: "Battle of Las Salinas", center: {lat: -13.54, lon: -71.96}, validCountry: "Peru", scenario: "Conquistadors fight a bloody civil war amongst themselves over territorial rights.", note: "Cusco.", continent: "South America" },
        { year: "1960 AD", name: "Valdivia Earthquake", center: {lat: -39.81, lon: -73.24}, validCountry: "Chile", scenario: "The most powerful earthquake ever recorded by instruments strikes the coast.", note: "Magnitude 9.5.", continent: "South America" },
        { year: "1533 AD", name: "Ransom Room", center: {lat: -7.16, lon: -78.51}, validCountry: "Peru", scenario: "An emperor offers a room full of gold and two of silver for his life.", note: "Cajamarca.", continent: "South America" },
        { year: "1822 AD", name: "Battle of Pichincha", center: {lat: -0.19, lon: -78.52}, validCountry: "Ecuador", scenario: "Rebel forces secure independence on the slopes of a stratovolcano.", note: "Near Quito.", continent: "South America" },
        { year: "1536 AD", name: "Muisca Conquest", center: {lat: 4.60, lon: -74.08}, validCountry: "Colombia", scenario: "Explorers searching for a legendary golden king conquer a highland confederation.", note: "Altiplano Cundiboyacense.", continent: "South America" },
        { year: "1978 AD", name: "Jonestown Tragedy", center: {lat: 7.76, lon: -59.89}, validCountry: "Guyana", scenario: "An isolated jungle commune ends in a horrific mass casualty event.", note: "South American jungle.", continent: "South America" },
        { year: "1630 AD", name: "Dutch Invasion of Olinda", center: {lat: -8.01, lon: -34.85}, validCountry: "Brazil", scenario: "A European trading company captures a wealthy sugar-producing region.", note: "Pernambuco.", continent: "South America" },

        // Europe (Expanding out of the major powers)
        { year: "872 AD", name: "Battle of Hafrsfjord", center: {lat: 58.93, lon: 5.66}, validCountry: "Norway", scenario: "A naval battle results in the unification of a coastal, mountainous kingdom.", note: "Western fjords.", continent: "Europe" },
        { year: "930 AD", name: "Althing Established", center: {lat: 64.25, lon: -21.11}, validCountry: "Iceland", scenario: "The oldest surviving parliament in the world convenes in a rift valley.", note: "Thingvellir.", continent: "Europe" },
        { year: "1939 AD", name: "Winter War", center: {lat: 60.98, lon: 29.38}, validCountry: "Finland", scenario: "Outnumbered ski troops hold off a massive invasion in freezing temperatures.", note: "Karelian Isthmus.", continent: "Europe" },
        { year: "965 AD", name: "Jelling Stones", center: {lat: 55.75, lon: 9.41}, validCountry: "Denmark", scenario: "A king raises massive runestones to announce his realm's conversion to Christianity.", note: "Jutland peninsula.", continent: "Europe" },
        { year: "1989 AD", name: "Baltic Way", center: {lat: 56.94, lon: 24.10}, validCountry: "Latvia", scenario: "Two million people join hands to form a human chain across three nations.", note: "Central capital.", continent: "Europe" },
        { year: "1831 AD", name: "Hill of Crosses", center: {lat: 56.01, lon: 23.32}, validCountry: "Lithuania", scenario: "Citizens begin secretly placing religious symbols on a hill in quiet defiance of an empire.", note: "Siauliai.", continent: "Europe" },
        { year: "1291 AD", name: "Rütli Oath", center: {lat: 46.96, lon: 8.59}, validCountry: "Switzerland", scenario: "Three alpine cantons swear an oath of mutual defense, forming a lasting confederacy.", note: "Lake Lucerne.", continent: "Europe" },
        { year: "1683 AD", name: "Siege of Vienna", center: {lat: 48.20, lon: 16.37}, validCountry: "Austria", scenario: "The largest cavalry charge in history breaks the siege of a central European capital.", note: "Kahlenberg.", continent: "Europe" },
        { year: "1993 AD", name: "Velvet Divorce", center: {lat: 48.14, lon: 17.10}, validCountry: "Slovakia", scenario: "A nation peacefully splits into two separate sovereign states.", note: "Bratislava.", continent: "Europe" },
        { year: "1358 AD", name: "Republic of Ragusa", center: {lat: 42.65, lon: 18.09}, validCountry: "Croatia", scenario: "A heavily fortified maritime republic secures its independence.", note: "Adriatic coast.", continent: "Europe" },
        { year: "480 BC", name: "Battle of Thermopylae", center: {lat: 38.79, lon: 22.53}, validCountry: "Greece", scenario: "A small coalition of hoplites holds a narrow coastal pass against a massive invading army.", note: "The Hot Gates.", continent: "Europe" },
        { year: "1974 AD", name: "Green Line Established", center: {lat: 35.18, lon: 33.38}, validCountry: "Cyprus", scenario: "A capital city is divided by a buffer zone following a military intervention.", note: "Mediterranean island.", continent: "Europe" },
        { year: "1755 AD", name: "Great Earthquake", center: {lat: 38.72, lon: -9.13}, validCountry: "Portugal", scenario: "A massive tremor, tsunami, and fires completely devastate a colonial capital on All Saints' Day.", note: "Atlantic coast.", continent: "Europe" },
        { year: "1637 AD", name: "Tulip Mania Collapses", center: {lat: 52.36, lon: 4.90}, validCountry: "Netherlands", scenario: "The first recorded speculative economic bubble bursts spectacularly.", note: "Low Countries.", continent: "Europe" },
        { year: "1915 AD", name: "Second Battle of Ypres", center: {lat: 50.85, lon: 2.88}, validCountry: "Belgium", scenario: "Poison gas is used for the first time on a mass scale in trench warfare.", note: "Flanders fields.", continent: "Europe" },
        { year: "1922 AD", name: "March on Rome", center: {lat: 41.90, lon: 12.49}, validCountry: "Italy", scenario: "Paramilitary 'Blackshirts' march on the capital, forcing a change in government.", note: "The peninsula.", continent: "Europe" },
        { year: "1995 AD", name: "Dayton Agreement", center: {lat: 43.85, lon: 18.41}, validCountry: "Bosnia and Herzegovina", scenario: "A peace agreement officially ends a brutal three-and-a-half-year conflict in the Balkans.", note: "The capital city.", continent: "Europe" },

        // Middle East & Central Asia
        { year: "1932 AD", name: "Unification of the Kingdom", center: {lat: 24.71, lon: 46.67}, validCountry: "Saudi Arabia", scenario: "A monarch formally unites dual kingdoms into a single desert state.", note: "Arabian Peninsula.", continent: "Asia" },
        { year: "570 AD", name: "Collapse of Marib Dam", center: {lat: 15.40, lon: 45.32}, validCountry: "Yemen", scenario: "An ancient engineering marvel fails, causing mass migration out of a southern kingdom.", note: "Sabaean Kingdom.", continent: "Asia" },
        { year: "1650 AD", name: "Expulsion of the Portuguese", center: {lat: 23.58, lon: 58.40}, validCountry: "Oman", scenario: "Local forces drive European colonizers out of their strategic coastal capital.", note: "Gulf of Oman.", continent: "Asia" },
        { year: "1971 AD", name: "Trucial States Unite", center: {lat: 24.45, lon: 54.37}, validCountry: "United Arab Emirates", scenario: "Several coastal emirates formally agree to form a single federation.", note: "Persian Gulf coast.", continent: "Asia" },
        { year: "270 AD", name: "Zenobia's Rebellion", center: {lat: 34.55, lon: 38.26}, validCountry: "Syria", scenario: "A warrior queen declares independence from a massive western empire.", note: "Palmyra oasis.", continent: "Asia" },
        { year: "1200 BC", name: "Phoenician Alphabet", center: {lat: 34.12, lon: 35.64}, validCountry: "Lebanon", scenario: "A maritime trading culture develops the first widely used phonemic alphabet.", note: "Byblos.", continent: "Asia" },
        { year: "1370 AD", name: "Timur's Capital", center: {lat: 39.62, lon: 66.97}, validCountry: "Uzbekistan", scenario: "A legendary conqueror establishes a glittering capital on the Silk Road.", note: "Samarkand.", continent: "Asia" },
        { year: "1221 AD", name: "Destruction of Merv", center: {lat: 37.66, lon: 62.19}, validCountry: "Turkmenistan", scenario: "A massive oasis city is entirely eradicated by an invading nomadic horde.", note: "Karakum Desert.", continent: "Asia" },
        { year: "3500 BC", name: "Botai Horse Domestication", center: {lat: 53.19, lon: 67.68}, validCountry: "Kazakhstan", scenario: "Evidence suggests the earliest known domestication of wild horses occurs here.", note: "Eurasian Steppe.", continent: "Asia" },
        { year: "1500 AD", name: "Tash Rabat Caravanserai", center: {lat: 40.82, lon: 75.28}, validCountry: "Kyrgyzstan", scenario: "A well-preserved stone inn provides shelter for merchants crossing the high mountains.", note: "Tian Shan mountains.", continent: "Asia" },
        { year: "301 AD", name: "Conversion of the Kingdom", center: {lat: 40.16, lon: 44.29}, validCountry: "Armenia", scenario: "A nation becomes the first in the world to adopt Christianity as its state religion.", note: "Caucasus region.", continent: "Asia" },
        { year: "1184 AD", name: "Reign of King Tamar", center: {lat: 41.71, lon: 44.82}, validCountry: "Georgia", scenario: "A female monarch oversees the apex of her kingdom's golden age.", note: "Tbilisi.", continent: "Asia" },
        { year: "1872 AD", name: "First Oil Boom", center: {lat: 40.40, lon: 49.86}, validCountry: "Azerbaijan", scenario: "The first mechanically drilled oil well sparks a massive industrial rush.", note: "Caspian Sea coast.", continent: "Asia" },

        // Africa (Deep History & Pre-Colonial)
        { year: "859 AD", name: "University of al-Qarawiyyin", center: {lat: 34.03, lon: -4.97}, validCountry: "Morocco", scenario: "The oldest continually operating, degree-granting university in the world is founded by a woman.", note: "Fez.", continent: "Africa" },
        { year: "6000 BC", name: "Tassili n'Ajjer Art", center: {lat: 25.10, lon: 8.12}, validCountry: "Algeria", scenario: "Prehistoric rock paintings depict a lush, green Sahara with grazing cattle.", note: "Deep Sahara desert.", continent: "Africa" },
        { year: "670 AD", name: "Founding of Kairouan", center: {lat: 35.67, lon: 10.10}, validCountry: "Tunisia", scenario: "A major center of Islamic scholarship is established in the Maghreb.", note: "Northern coast.", continent: "Africa" },
        { year: "200 AD", name: "Leptis Magna Expansion", center: {lat: 32.63, lon: 14.29}, validCountry: "Libya", scenario: "An emperor expands his North African birthplace into a majestic port city.", note: "Mediterranean coast.", continent: "Africa" },
        { year: "1444 AD", name: "Gorée Island Post", center: {lat: 14.66, lon: -17.39}, validCountry: "Senegal", scenario: "A small island becomes a heavily contested port in the transatlantic trade network.", note: "Off the westernmost peninsula.", continent: "Africa" },
        { year: "1897 AD", name: "Sack of Benin City", center: {lat: 6.33, lon: 5.62}, validCountry: "Nigeria", scenario: "A punitive expedition burns a kingdom and loots thousands of intricate bronze plaques.", note: "West Africa.", continent: "Africa" },
        { year: "1400 AD", name: "Swahili Coast Trade", center: {lat: -2.26, lon: 40.90}, validCountry: "Kenya", scenario: "A thriving coral-stone city-state trades spices and ivory across the Indian Ocean.", note: "Lamu Archipelago.", continent: "Africa" },
        { year: "1200 AD", name: "Rock-Hewn Churches", center: {lat: 12.03, lon: 39.04}, validCountry: "Ethiopia", scenario: "A king orders the carving of massive monolithic churches directly into the bedrock.", note: "Lalibela.", continent: "Africa" },
        { year: "1470 BC", name: "Expedition to Punt", center: {lat: 10.00, lon: 49.00}, validCountry: "Somalia", scenario: "A northern queen sends a trading fleet to the 'Land of the Gods' for frankincense.", note: "Horn of Africa.", continent: "Africa" },
        { year: "1300 AD", name: "Buganda Kingdom Ascends", center: {lat: 0.34, lon: 32.58}, validCountry: "Uganda", scenario: "A powerful kingdom consolidates control over the region north of a massive lake.", note: "Lake Victoria region.", continent: "Africa" },
        { year: "1810 AD", name: "Merina Unification", center: {lat: -18.87, lon: 47.50}, validCountry: "Madagascar", scenario: "A monarch successfully unites the diverse factions of a massive island.", note: "Antananarivo.", continent: "Africa" },
        { year: "1624 AD", name: "Queen Nzinga's Reign", center: {lat: -8.83, lon: 13.28}, validCountry: "Angola", scenario: "A brilliant diplomat and military tactician fiercely resists European slave traders.", note: "Ndongo and Matamba kingdoms.", continent: "Africa" },
        { year: "1430 AD", name: "Mutapa Empire", center: {lat: -16.80, lon: 31.50}, validCountry: "Zimbabwe", scenario: "A powerful warrior-king establishes a vast realm built on gold mining and trade.", note: "Southern Africa.", continent: "Africa" },
        { year: "1855 AD", name: "Mosi-oa-Tunya Recorded", center: {lat: -17.92, lon: 25.85}, validCountry: "Zambia", scenario: "An explorer becomes the first European to document 'The Smoke That Thunders'.", note: "Zambezi River.", continent: "Africa" },
        { year: "1000 AD", name: "Tsodilo Hills Art", center: {lat: -18.76, lon: 21.74}, validCountry: "Botswana", scenario: "Over 4,500 rock paintings are created in the 'Louvre of the Desert'.", note: "Kalahari Desert.", continent: "Africa" },
        { year: "1904 AD", name: "Herero Uprising", center: {lat: -22.56, lon: 17.06}, validCountry: "Namibia", scenario: "Indigenous pastoralists rebel against colonial rule, resulting in a tragic genocide.", note: "Southwest Africa.", continent: "Africa" },

        // Asia & Oceania
        { year: "1400 AD", name: "Malacca Sultanate", center: {lat: 2.18, lon: 102.25}, validCountry: "Malaysia", scenario: "A strategic port city becomes the dominant power controlling the main east-west sea route.", note: "Strait of Malacca.", continent: "Asia" },
        { year: "1975 AD", name: "Fall of Phnom Penh", center: {lat: 11.55, lon: 104.92}, validCountry: "Cambodia", scenario: "Radical agrarian insurgents capture the capital, emptying the city's population.", note: "Indochina.", continent: "Asia" },
        { year: "1353 AD", name: "Lan Xang Founded", center: {lat: 19.88, lon: 102.13}, validCountry: "Laos", scenario: "The 'Kingdom of a Million Elephants' is established along a mighty river.", note: "Mekong River valley.", continent: "Asia" },
        { year: "7000 BC", name: "Kuk Swamp Agriculture", center: {lat: -5.78, lon: 144.33}, validCountry: "Papua New Guinea", scenario: "Evidence reveals some of the earliest independent development of agriculture in the world.", note: "Highland valleys.", continent: "Oceania" },
        { year: "1874 AD", name: "Deed of Cession", center: {lat: -18.14, lon: 178.43}, validCountry: "Fiji", scenario: "High chiefs formally cede their island nation to a distant colonial empire.", note: "South Pacific archipelago.", continent: "Oceania" },
        { year: "477 AD", name: "Sigiriya Rock Fortress", center: {lat: 7.95, lon: 80.76}, validCountry: "Sri Lanka", scenario: "A rogue king builds a massive palace on top of a 200-meter-high column of rock.", note: "Lion Rock.", continent: "Asia" },
        { year: "623 BC", name: "Birth of Siddhartha", center: {lat: 27.48, lon: 83.27}, validCountry: "Nepal", scenario: "A prince who will eventually found a major world religion is born in a sacred garden.", note: "Lumbini.", continent: "Asia" },
        { year: "1616 AD", name: "Unification of the Dragon", center: {lat: 27.47, lon: 89.64}, validCountry: "Bhutan", scenario: "A fleeing lama arrives in the high mountains and unifies the region into a single state.", note: "Himalayan kingdom.", continent: "Asia" },
        { year: "1220 AD", name: "Karakorum Established", center: {lat: 47.19, lon: 102.84}, validCountry: "Mongolia", scenario: "A massive nomadic empire selects a site for its new permanent capital city.", note: "Orkhon Valley.", continent: "Asia" },
        { year: "1521 AD", name: "Golden Age of the Sultanate", center: {lat: 4.89, lon: 114.94}, validCountry: "Brunei", scenario: "A wealthy thalassocracy reaches its peak, controlling a massive northern coastline.", note: "Borneo.", continent: "Asia" },
        { year: "1443 AD", name: "Creation of Hangul", center: {lat: 37.56, lon: 126.97}, validCountry: "South Korea", scenario: "A beloved king personally oversees the creation of a brilliantly logical, phonetic alphabet.", note: "Joseon Dynasty.", continent: "Asia" },
        { year: "1624 AD", name: "Fort Zeelandia Built", center: {lat: 23.00, lon: 120.16}, validCountry: "Taiwan", scenario: "A European trading company builds a stronghold on a large island off the mainland coast.", note: "Tainan.", continent: "Asia" },
        
        // Global Deep Cuts (To round out 100)
        { year: "1980 AD", name: "Independence Declared", center: {lat: -17.82, lon: 31.04}, validCountry: "Zimbabwe", scenario: "A nation formerly known as Rhodesia officially becomes an independent republic.", note: "Southern Africa.", continent: "Africa" },
        { year: "1821 AD", name: "Battle of Carabobo", center: {lat: 10.03, lon: -68.01}, validCountry: "Venezuela", scenario: "A decisive victory secures the independence of the northern tip of South America.", note: "Led by Simon Bolivar.", continent: "South America" },
        { year: "1893 AD", name: "Women's Suffrage Granted", center: {lat: -41.28, lon: 174.77}, validCountry: "New Zealand", scenario: "An island nation becomes the first self-governing country to give women the right to vote.", note: "Wellington.", continent: "Oceania" },
        { year: "1571 AD", name: "Battle of Lepanto", center: {lat: 38.38, lon: 21.73}, validCountry: "Greece", scenario: "A massive fleet of rowing galleys clashes in the last major naval battle of its kind.", note: "Ionian Sea.", continent: "Europe" },
        { year: "1935 AD", name: "Long March Ends", center: {lat: 36.56, lon: 109.48}, validCountry: "China", scenario: "A brutal, year-long military retreat secures the survival of a political movement.", note: "Shaanxi province.", continent: "Asia" },
        { year: "1804 AD", name: "First Empire Declared", center: {lat: 18.53, lon: -72.33}, validCountry: "Haiti", scenario: "A newly free nation changes its name back to the indigenous Taino word for the island.", note: "Port-au-Prince.", continent: "North America" },
        { year: "1258 AD", name: "Siege of the Capital", center: {lat: 33.31, lon: 44.36}, validCountry: "Iraq", scenario: "An invading horde throws so many books into the river that the water runs black with ink.", note: "Abbasid Caliphate.", continent: "Asia" },
        { year: "1692 AD", name: "Witch Trials Begin", center: {lat: 42.51, lon: -70.89}, validCountry: "United States", scenario: "Mass hysteria grips a colonial village, leading to a series of infamous hearings.", note: "Massachusetts.", continent: "North America" },
        { year: "1588 AD", name: "Armada Defeated", center: {lat: 50.15, lon: -4.13}, validCountry: "United Kingdom", scenario: "A massive invasion fleet is scattered by nimble defenders and terrible weather.", note: "English Channel.", continent: "Europe" },
        { year: "1868 AD", name: "Boshin War", center: {lat: 35.01, lon: 135.76}, validCountry: "Japan", scenario: "Forces loyal to the Emperor clash with those loyal to the Shogunate.", note: "Kyoto.", continent: "Asia" },
        { year: "1914 AD", name: "Battle of the Marne", center: {lat: 48.95, lon: 2.88}, validCountry: "France", scenario: "A desperate counter-attack utilizing city taxis halts a massive invasion.", note: "Just outside the capital.", continent: "Europe" },
        { year: "1989 AD", name: "Square Protests", center: {lat: 39.90, lon: 116.39}, validCountry: "China", scenario: "A massive student-led demonstration is violently suppressed in the capital.", note: "East Asia.", continent: "Asia" },
        { year: "1999 AD", name: "Canal Handover", center: {lat: 8.98, lon: -79.52}, validCountry: "Panama", scenario: "A superpower formally transfers control of a vital global waterway back to the host nation.", note: "Central America.", continent: "North America" },
        { year: "1066 AD", name: "Battle of Stamford Bridge", center: {lat: 53.98, lon: -0.91}, validCountry: "United Kingdom", scenario: "A king rushes north to defeat a Viking invasion, just days before another invasion hits the south.", note: "Yorkshire.", continent: "Europe" },
        { year: "1814 AD", name: "Burning of the Capital", center: {lat: 38.89, lon: -77.03}, validCountry: "United States", scenario: "Invading forces set fire to the executive mansion and legislature buildings.", note: "The War of 1812.", continent: "North America" },
        { year: "1955 AD", name: "Bus Boycott", center: {lat: 32.37, lon: -86.30}, validCountry: "United States", scenario: "A localized protest against transit segregation sparks a massive civil rights movement.", note: "Alabama.", continent: "North America" },
        { year: "1347 AD", name: "Arrival of the Plague", center: {lat: 38.11, lon: 13.36}, validCountry: "Italy", scenario: "Trade ships arrive in port carrying a devastating illness that will reshape a continent.", note: "Sicily.", continent: "Europe" },
        { year: "1885 AD", name: "Conference Maps Drawn", center: {lat: 52.52, lon: 13.40}, validCountry: "Germany", scenario: "European powers convene to arbitrarily divide a massive continent into colonial spheres.", note: "The Scramble for Africa.", continent: "Europe" },
        { year: "1917 AD", name: "Halifax Explosion", center: {lat: 44.66, lon: -63.59}, validCountry: "Canada", scenario: "Two ships collide in a harbor, causing the largest man-made explosion prior to nuclear weapons.", note: "Nova Scotia.", continent: "North America" },
        { year: "1940 AD", name: "Cave Art Discovered", center: {lat: 45.05, lon: 1.16}, validCountry: "France", scenario: "Teenagers chasing a dog discover a complex of caves filled with Paleolithic paintings.", note: "Dordogne region.", continent: "Europe" },
        { year: "1756 AD", name: "Black Hole Incident", center: {lat: 22.57, lon: 88.36}, validCountry: "India", scenario: "Prisoners of war are held in a suffocatingly small dungeon after the fall of a local fort.", note: "Calcutta.", continent: "Asia" },
        { year: "1973 AD", name: "Opera House Opens", center: {lat: -33.85, lon: 151.21}, validCountry: "Australia", scenario: "A highly iconic, sail-shaped performing arts center is officially inaugurated.", note: "Sydney Harbour.", continent: "Oceania" },
        { year: "1890 AD", name: "Wounded Knee", center: {lat: 43.14, lon: -102.36}, validCountry: "United States", scenario: "A tragic massacre marks the end of the major Indian Wars on the plains.", note: "South Dakota.", continent: "North America" },
        { year: "1968 AD", name: "Spring Uprising", center: {lat: 50.07, lon: 14.43}, validCountry: "Czech Republic", scenario: "A brief period of political liberalization is crushed by an invading coalition of tanks.", note: "Eastern Bloc.", continent: "Europe" },
        { year: "1531 AD", name: "Apparition on the Hill", center: {lat: 19.48, lon: -99.11}, validCountry: "Mexico", scenario: "An indigenous peasant reports a miraculous vision, deeply impacting regional religion.", note: "Tepeyac Hill.", continent: "North America" }
    ];

    dailyLevels = dailyLevels.concat(expansionPack);

// --- NARRATIVE: NODE-BASED TRANSMISSIONS ---
// These play IMMEDIATELY AFTER you beat the specified node, before returning to the map.
const nodeTransmissions = {
    // --- CHAPTER 1: THE INTRODUCTION ---
    "node_003": { 
        title: "CRITICAL BRIEFING // ROGUE ENTITY",
        msg: "Agent, the system didn't just crash. It was attacked. <br><br>We have identified a rogue Triangulator—designation: <strong>Subject Zero</strong>—actively detonating paradoxes across the timeline. If these fractures reach the Anchor Points, our reality ceases to exist. <br><br>Track their signal. Prune the anomalies. Do not fail.",
        sender: "COMMAND"
    },

    // --- CHAPTER 2: THE IRON CURTAIN ---
    "node_203": { // Top Branch (Prague Spring)
        title: "UNAUTHORIZED INTERCEPT",
        msg: "They call it 'Alignment.' I call it control. <br><br>You just crushed a reformist movement to keep the timeline docile. Do you ever actually look at the lives you're erasing, or do you just stare at the radar?",
        sender: "SUBJECT ZERO"
    },
    "node_007": { // Bottom Branch (Proxy War)
        title: "UNAUTHORIZED INTERCEPT",
        msg: "You think you're saving the world? You're just a janitor sweeping up the Directorate's genocide. <br><br>Every time you press that scan button, you're incinerating millions of lives to keep their 'Prime Timeline' clean. Wake up. I'm not breaking history. I'm setting it free.",
        sender: "SUBJECT ZERO"
    },
    "node_boss_2": { // Chapter 2 Anchor
        title: "DIRECTIVE // COGNITIVE HAZARD",
        msg: "Agent, our telemetry shows Subject Zero has been broadcasting to your terminal. <br><br>Do not engage. Empathy is a cognitive hazard. The anomaly uses emotional manipulation to protect unauthorized timeline branches. The Prime Timeline relies on your absolute obedience.",
        sender: "COMMAND"
    },

    // --- CHAPTER 3: THE DARK AGES ---
    "node_306": { // Top Branch (Cocoliztli Epidemic)
        title: "UNAUTHORIZED INTERCEPT",
        msg: "I cured this sickness. I gave them life. And you just marched in, triangulated their location, and re-introduced the pathogen. <br><br>How do you sleep? How do you justify this?",
        sender: "SUBJECT ZERO"
    },
    "node_308": { // Bottom Branch (Year Without a Summer)
        title: "UNAUTHORIZED INTERCEPT",
        msg: "They were going to survive the climate shift. I showed them how to stabilize the crops. <br><br>You just erased an entire divergent culture just to hit a Directorate quota. You are the villain here.",
        sender: "SUBJECT ZERO"
    },
    "node_boss_3": { // Chapter 3 Anchor
        title: "SITREP // ACCEPTABLE LOSSES",
        msg: "Subject Zero is attempting to shield unauthorized timelines from our sensors using localized fog in the upcoming eras. <br><br>Do not let their propaganda infect your protocols. These divergent populations are statistical errors. They are supply-chain drag. Prune them without hesitation.",
        sender: "COMMAND"
    },

    // --- CHAPTER 4: THE AGE OF DISCOVERY ---
    "node_406": { // Top Branch (Earhart)
        title: "UNAUTHORIZED INTERCEPT",
        msg: "I just wanted her to finish her flight. That's it. <br><br>Why does the Directorate demand that she crashes into the ocean? Why does history have to be so cruel to be 'correct'? It's sick.",
        sender: "SUBJECT ZERO"
    },
    "node_408": { // Bottom Branch (Mutiny on the Bounty)
        title: "UNAUTHORIZED INTERCEPT",
        msg: "Look at what they are making you do. Mutineers, explorers, dreamers... you're hunting down anyone who dares to step off the Directorate's approved path. <br><br>They just wanted to be free. Just like me.",
        sender: "SUBJECT ZERO"
    },
    "node_boss_4": { // Chapter 4 Anchor (The Final Warning)
        title: "THE FINAL WARNING",
        msg: "This is it. The Temporal Anchor. <br><br>If you align the Manhattan Project, you lock the universe into the Directorate's cage forever. I can't let you do that. I'm going to throw everything I have at you. <br><br>Please... don't make me stop you.",
        sender: "SUBJECT ZERO"
    }
};

    // UTILS
    function parseYear(yStr) { let y = parseInt(yStr); return yStr.includes("BC") ? -y : y; }
    storyLevels.sort((a,b) => parseYear(a.year) - parseYear(b.year));

    // GAME STATE
    let totalEndlessDistance = 0;
    let totalEndlessGuesses = 0;
    let anomalyLevel = 1;
    let activeUpgrades = {
        lodOverride: false,
        erosionBuffer: false,
        subspaceSensors: false
    };
    let dailyGuessCount = 0; // Tracks guesses in the current daily run
    let levelGuessCount = 0; // Tracks guesses for the current active level
    let defaultStats = { played: 0, wins: 0, currentStreak: 0, maxStreak: 0, distribution: {1:0, 2:0, 3:0, 4:0, 5:0, '6+':0} };
    let currentMode = null; 
    let currentLevelIdx = 0;
    let currentLevelList = [];
    let dailyGuessHistory = [];
    let health = 100;
    let gameOver = false;
    let mutationTimer = null;
    let hijackTriggered = false;
    // --- FINAL BOSS GLOBALS ---
    let doomsdayTimer = null;
    let doomsdaySeconds = 60;
    let bossTargetsFound = [];

    // PRNG for Daily Seed
    function mulberry32(a) {
        return function() {
            var t = a += 0x6D2B79F5;
            t = Math.imul(t ^ t >>> 15, t | 1);
            t ^= t + Math.imul(t ^ t >>> 7, t | 61);
            return ((t ^ t >>> 14) >>> 0) / 4294967296;
        }
    }

    function initMode(mode) {
        currentMode = mode;

        // INTERCEPT STORY MODE
        if (mode === 'story') {
            // Hide the main menu immediately
            document.getElementById('mainMenu').style.display = 'none';
            
            // Run the boot sequence, and WHEN IT FINISHES, load the map!
            runBootSequence(() => {
                document.getElementById('temporalMapUI').style.display = 'block';
                loadStoryProgress(); 
                renderTemporalMap();
            });
            return; // Stop the rest of the function from running!
        }

        // --- Normal Behavior for Daily & Endless ---
        document.getElementById('mainMenu').style.display = 'none';
        document.getElementById('gameUI').style.display = 'block';
        
        if (mode === 'daily') {
            document.getElementById('modeLabel').innerText = "DAILY PARADOX";
            startDaily();
        } else if (mode === 'endless') {
            document.getElementById('modeLabel').innerText = "THE ANOMALY";
            startEndless();
        } 
    }

    function startStory() {
        currentLevelList = storyLevels;
        currentLevelIdx = 0;
        health = 100;
        gameOver = false;
        
        // Show intro story check
        if (storyBeats[0]) {
            showStory(0);
        } else {
            loadLevel(0);
        }
    }

    function startDaily() {
        currentLevelList = dailyLevels;
        const today = new Date().toISOString().slice(0, 10);
        
        // Calculate Index FIRST so we know the level even if they already played
        const dateNum = parseInt(today.replace(/-/g, ''));
        let seed = Math.imul(dateNum, 1597334677); 
        const rand = mulberry32(seed);
        currentLevelIdx = Math.floor(rand() * dailyLevels.length);
        
        const savedResult = localStorage.getItem('temporle_daily_' + today);
        if (savedResult) {
            document.getElementById('yearVal').innerText = "LOCKED";
            document.getElementById('scenarioText').innerText = "Daily Paradox already attempted.";
            gameOver = true;
            document.getElementById('countryInput').disabled = true;
            
            if(savedResult === 'win') {
                document.getElementById('winModal').style.display = 'flex';
                document.getElementById('winMsg').innerText = "Daily Complete";
                populateDebrief('winDebrief', dailyLevels[currentLevelIdx]); // SHOW DEBRIEF
                document.getElementById('dailyCompleteUI').classList.remove('hidden');
                document.getElementById('nextLvlBtn').classList.add('hidden');
                startTimer();
            } else {
                document.getElementById('loseModal').style.display = 'flex';
                populateDebrief('loseDebrief', dailyLevels[currentLevelIdx]); // SHOW DEBRIEF
                document.getElementById('dailyFailUI').classList.remove('hidden');
                document.getElementById('retryBtn').classList.add('hidden');
            }
            return;
        }

        health = 100;
        gameOver = false;
        loadLevel(currentLevelIdx);
    }

    function triggerWin() {
        clearInterval(mutationTimer);
        gameOver = true;

        // --- TELEMETRY PIPELINE ---
        try {
            fetch('https://temporleapi.onrender.com/api/telemetry', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    gameMode: currentMode,
                    isWin: true,
                    guessCount: levelGuessCount,
                    remainingHealth: health
                })
            });
        } catch (err) {
            console.error("Telemetry failed to send:", err);
        }

        sfx.win();
        document.getElementById('radar-container')?.classList.add('win-pulse');
        
        // Safely disable inputs without crashing
        const inputField = document.getElementById('countryInput');
        if (inputField) inputField.disabled = true;

        // FIXED: Now it specifically targets the scan button class
        const scanButton = document.querySelector('.btn-scan'); 
        if (scanButton) scanButton.disabled = true;

        // Show win modal and correct text
        const modal = document.getElementById('winModal');
        const winMsgElement = document.getElementById('winMsg');
        if (winMsgElement) winMsgElement.innerText = `Epicenter Triangulated. The anomaly has been stabilized.`;
        
        // --- NEW ROUTING UI LOGIC ---
        const nextBtn = document.getElementById('nextLvlBtn');
        const dailyUI = document.getElementById('dailyCompleteUI');
        
        if (currentMode === 'daily') {
            dailyUI.classList.remove('hidden');
            nextBtn.classList.add('hidden');
            // If it's a daily win, populate the debrief
            populateDebrief('winDebrief', dailyLevels[currentLevelIdx]);

            const today = new Date().toISOString().slice(0, 10);
            localStorage.setItem('temporle_daily_' + today, 'win'); // Locks the day
            saveAndRenderStats(true); // Updates personal stats
            startTimer(); // Starts the countdown

        } else if (currentMode === 'story') {
            // NEW: The Story Mode intercept!
            dailyUI.classList.add('hidden');
            nextBtn.classList.remove('hidden');
            nextBtn.innerText = "Return to Map";
            
            // Override the default "nextLevel" click with our new Map logic
            nextBtn.onclick = () => completeCurrentNode(); 

        } else {
            // Endless or default behavior
            dailyUI.classList.add('hidden');
            nextBtn.classList.remove('hidden');
            
            // Reset the onclick just in case they played Story mode right before this
            nextBtn.onclick = () => nextLevel(); 
            
            if (currentMode === 'endless') {
                nextBtn.innerText = "Enter Time Nexus";
                // If you have a specific function to open the Nexus, you could put it here like:
                // nextBtn.onclick = () => openNexusModal();
            } else {
                nextBtn.innerText = "Jump Forward";
            }
        }

        modal.style.display = 'flex';
    }

    function triggerLoss() {
        clearInterval(mutationTimer);
        gameOver = true;
        health = 0;
        updateHealthUI();
        stopMemoryLeak();
        document.body.classList.remove('fog-active');

       // --- NEW TELEMETRY PIPELINE ---
        let finalDepth = 0;
        let finalGuesses = levelGuessCount;
        
        // If it's endless, hijack the variables!
        if (currentMode === 'endless') {
            finalDepth = anomalyLevel;
            finalGuesses = totalEndlessGuesses;
        }

        try {
            fetch('https://temporleapi.onrender.com/api/telemetry', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    gameMode: currentMode,
                    isWin: false, // The run officially ends on a loss
                    guessCount: finalGuesses, // Total guesses for the whole run
                    remainingHealth: finalDepth // HIJACKING THIS COLUMN TO STORE DEPTH!
                })
            });
        } catch (err) {
            console.error("Telemetry failed to send:", err);
        }
        // ------------------------------

        sfx.err(); // BUG 1 FIXED: Changed from sfx.loss()
        
        // Safely disable inputs without crashing
        const inputField = document.getElementById('countryInput');
        if (inputField) inputField.disabled = true;

        const scanButton = document.querySelector('.btn-scan'); 
        if (scanButton) scanButton.disabled = true;

        // Show loss modal
        const targetLevel = currentLevelList[currentLevelIdx];
        const modal = document.getElementById('loseModal'); // BUG 2 FIXED: Changed from lossModal
        const lossMsgElement = document.getElementById('lossMessage');

        activeUpgrades = { lodOverride: false, erosionBuffer: false, subspaceSensors: false, predictiveEngine: false };

        // --- FIX: HIDE ANSWER IN STORY MODE ---
        if (currentMode === 'story') {
            if (lossMsgElement) lossMsgElement.innerText = `Integrity Critical. Timeline collapse imminent. Target coordinates remain classified.`;
        } else {
            if (lossMsgElement) lossMsgElement.innerText = `Integrity Critical. The correct coordinates were: ${targetLevel.validCountry}.`;
        }
        
        // --- ADD THIS BLOCK FOR DAILY LOSSES ---
        if (currentMode === 'daily') {
            const today = new Date().toISOString().slice(0, 10);
            localStorage.setItem('temporle_daily_' + today, 'loss'); // Locks the day
            saveAndRenderStats(false); // Updates personal stats
            
            document.getElementById('dailyFailUI').classList.remove('hidden');
            document.getElementById('retryBtn').classList.add('hidden');
            populateDebrief('loseDebrief', targetLevel);
        }
        // ---------------------------------------
        
        modal.style.display = 'flex';
    }

    function loadLevel(idx) {
        currentLevelIdx = idx;
        
        gameOver = false;
        const level = currentLevelList[idx];

        if (currentMode === 'story' && level.mutation === 'hardcore') {
            startMemoryLeak();
        } else {
            stopMemoryLeak(); // Safety catch for normal levels
        }

        // 2. The Fog of War (Chapter IV)
        if (currentMode === 'story' && level && level.mutation === 'fog_of_war') {
            document.body.classList.add('fog-active');
        } else {
            document.body.classList.remove('fog-active');
        }

        document.getElementById('winModal').style.display = 'none';
        document.getElementById('loseModal').style.display = 'none';
        document.getElementById('endGameModal').style.display = 'none';

        updateBackground(level.year);
        updateHealthUI();
        
        document.getElementById('yearVal').innerText = level.year;
        document.getElementById('scenarioText').innerText = level.scenario;
        document.getElementById('hintText').classList.add('hidden');
        document.getElementById('logList').innerHTML = '';
        // --- FIX: RESET RADAR UI ---
        document.getElementById('radarReadout').innerText = "Standby";
        document.getElementById('radarReadout').style.color = "var(--text-muted)";
        document.getElementById('compassArrow').style.transform = `rotate(0deg)`;
        document.getElementById('compassArrow').style.opacity = '1'; 
        // ---------------------------        
        const counter = document.getElementById('levelCountDisplay');
        if (counter) {
            counter.innerText = (currentMode === 'story') ? `Level ${idx + 1} / ${currentLevelList.length}` : "Daily Event";
        }
        
        // 2. THIS WAS MISSING: Turn the Scan button back on!
        const scanBtn = document.querySelector('.btn-scan');
        if (scanBtn) scanBtn.disabled = false;

        document.getElementById('countryInput').value = '';
        document.getElementById('countryInput').disabled = false;
        document.getElementById('btnAbility1').disabled = false;
        document.getElementById('btnAbility2').disabled = false;
        document.querySelectorAll('.blip').forEach(b => b.remove());
        
        // UPGRADE: PREDICTIVE ENGINE (Ghost Blip)
        if (currentMode === 'endless' && activeUpgrades.predictiveEngine) {
            const tLat = currentLevelList[currentLevelIdx].center.lat;
            const tLon = currentLevelList[currentLevelIdx].center.lon;
            
            // Generate a random offset within roughly 3000km
            const latOffset = (Math.random() - 0.5) * 20; 
            const lonOffset = (Math.random() - 0.5) * 20;
            
            const ghostDist = getDistance(tLat + latOffset, tLon + lonOffset, tLat, tLon);
            const ghostBearing = getBearing(tLat, tLon, tLat + latOffset, tLon + lonOffset);
            
            const radar = document.getElementById('radarScreen');
            const ghost = document.createElement('div');
            ghost.className = 'blip';
            let r = (ghostDist / 15000) * 50; if (r > 48) r = 48;
            
            ghost.style.background = "rgba(156, 163, 175, 0.5)"; // Faded grey
            ghost.style.borderColor = "rgba(156, 163, 175, 0.8)";
            ghost.style.boxShadow = "none";
            
            const rad = (ghostBearing - 90) * (Math.PI / 180); 
            const x = r * Math.cos(rad); const y = r * Math.sin(rad);
            ghost.style.left = `calc(50% + ${x}%)`; ghost.style.top = `calc(50% + ${y}%)`;
            radar.appendChild(ghost);
        }

        // --- RESET ABILITIES & HINTS FOR NEW ROUND ---
        const hintContainer = document.getElementById('hintText'); 
        if (hintContainer) {
            hintContainer.innerHTML = ''; 
            hintContainer.style.display = ''; // Wipes the stubborn inline style!
            hintContainer.classList.add('hidden'); // Relies purely on your CSS classes
        }

        // Re-enable the ability buttons so they can be clicked again
        const btnMacro = document.getElementById('btnAbility1');
        const btnDecrypt = document.getElementById('btnAbility2');
        if (btnMacro) {
            btnMacro.disabled = false;
            btnMacro.style.opacity = '1';
            btnMacro.innerHTML = '<span class="cost-badge">-15%</span> <span>Macro</span>'; 
        }
        if (btnDecrypt) {
            btnDecrypt.disabled = false;
            btnDecrypt.style.opacity = '1';
            btnDecrypt.innerHTML = '<span class="cost-badge">-10%</span> <span>Decrypt</span>';
        }

        // --- MUTATION: BOSS ABILITIES ---
        if (level.mutation === 'hardcore_lite') {
            // Abilities cost double!
            if (btnMacro) btnMacro.innerHTML = '<span class="cost-badge">-30%</span> <span>Macro</span>';
            if (btnDecrypt) btnDecrypt.innerHTML = '<span class="cost-badge">-20%</span> <span>Decrypt</span>';
        } else if (level.mutation === 'hardcore_med' || level.mutation === 'hardcore_heavy' || level.mutation === 'hardcore') {
            // Abilities completely disabled!
            if (btnMacro) { btnMacro.disabled = true; btnMacro.style.opacity = '0.3'; btnMacro.innerHTML = '<i class="bi bi-x-circle"></i> OFFLINE'; }
            if (btnDecrypt) { btnDecrypt.disabled = true; btnDecrypt.style.opacity = '0.3'; btnDecrypt.innerHTML = '<i class="bi bi-x-circle"></i> OFFLINE'; }
        }

        // --- MUTATION TRIGGERS ---
        if (currentMode === 'story' && (level.mutation === 'hardcore_med' || level.mutation === 'hardcore_heavy' || level.mutation === 'hardcore')) {
            startMemoryLeak();
        } else {
            stopMemoryLeak(); 
        }

        levelGuessCount = 0;
        // --- MUTATION: INTEGRITY BLEED ---
        clearInterval(mutationTimer); // Clear any old timers just in case
        if (level.mutation === 'integrity_bleed') {
            mutationTimer = setInterval(() => {
                if (gameOver) return;
                
                health -= 2;
                updateHealthUI();
                
                // Flash the screen red so they know they are bleeding
                document.body.classList.add('taking-damage');
                setTimeout(() => document.body.classList.remove('taking-damage'), 200);

                if (health <= 0) triggerLoss();
            }, 5000); // Ticks every 5000 milliseconds (5 seconds)
        }

        // --- THE FINAL BOSS TRIGGER ---
        if (currentMode === 'story' && level.name === "The Manhattan Project") {
            startFinalBossSequence();
        } else {
            stopFinalBossSequence();
        }

        input.focus(); // Snaps the cursor back instantly
    }

    function updateBackground(yearStr) {
        const y = parseYear(yearStr);
        let bg = "";
        
        if (y < 0) { // Ancient
            bg = "linear-gradient(135deg, #fdfbfb 0%, #e2d1c3 100%)";
            document.body.style.setProperty('--primary', '#d97706');
        } else if (y < 1500) { // Medieval
            bg = "linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)";
            document.body.style.setProperty('--primary', '#4f46e5');
        } else if (y < 1900) { // Industrial
            bg = "linear-gradient(135deg, #f3f4f6 0%, #9ca3af 100%)";
            document.body.style.setProperty('--primary', '#374151');
        } else { // Modern
            bg = "linear-gradient(135deg, #ecfeff 0%, #a5f3fc 100%)";
            document.body.style.setProperty('--primary', '#0891b2');
        }
        document.body.style.background = bg;
    }

    // STORY MODAL LOGIC
   function showStory(idx) {
        const beat = storyBeats[idx];
        document.getElementById('storySender').innerText = beat.sender;
        document.getElementById('storyTitle').innerText = beat.title;
        
        const msgContainer = document.getElementById('storyMsg');
        msgContainer.innerHTML = ""; // Clear old text
        
        if (beat.sender !== "COMMAND") {
            document.getElementById('storySender').style.color = "var(--danger)";
            document.querySelector('#storyModal .modal').style.borderColor = "var(--danger)";
        } else {
            document.getElementById('storySender').style.color = "var(--primary)";
            document.querySelector('#storyModal .modal').style.borderColor = "var(--primary)";
        }

        document.getElementById('storyModal').style.display = 'flex';

        // TYPEWRITER EFFECT
        let i = 0;
        const speed = 20; // milliseconds per letter
        const textToType = beat.msg;
        
        function typeWriter() {
            if (i < textToType.length) {
                // Quick hack to handle HTML breaks <br>
                if (textToType.charAt(i) === '<') {
                    let tag = "";
                    while (textToType.charAt(i) !== '>' && i < textToType.length) { tag += textToType.charAt(i); i++; }
                    tag += '>';
                    msgContainer.innerHTML += tag;
                } else {
                    msgContainer.innerHTML += textToType.charAt(i);
                }
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        setTimeout(typeWriter, 300); // Slight delay before typing starts
    }

    function closeStory() {
        document.getElementById('storyModal').style.display = 'none';
        loadLevel(currentLevelIdx);
    }

    function useAbility(type) {
        if (gameOver) return;
        const cost = type === 'continent' ? 15 : 10;
        const activeLevel = currentLevelList[currentLevelIdx];
        if (currentMode === 'story' && activeLevel && activeLevel.mutation === 'hardcore_lite') cost *= 2; // Double cost!
        if (currentMode === 'daily') dailyGuessCount++; // ADD THIS LINE HERE
        if (health <= cost) { sfx.err(); return; }

        sfx.click();
        health -= cost;
        updateHealthUI();
        
        const level = currentLevelList[currentLevelIdx];
        const hintBox = document.getElementById('hintText');
        hintBox.style.display = ''; // Ensures no inline styles are blocking it
        hintBox.classList.remove('hidden');

        if (type === 'continent') {
            hintBox.innerHTML = `<span>📍 Target region: ${level.continent}</span>`;
            document.getElementById('btnAbility1').disabled = true;
        } else if (type === 'letter') {
            hintBox.innerHTML += `<span>🔤 Starts with '${level.validCountry.charAt(0)}'</span>`;
            document.getElementById('btnAbility2').disabled = true;
        }
    }

    // 1. ADD 'async' HERE
    async function handleGuess() {
        if (gameOver) return;
        const input = document.getElementById('countryInput');
        const val = input.value.trim();
        const country = countries.find(c => c.name.toLowerCase() === val.toLowerCase());

        if (!country) {
            sfx.err();
            input.style.borderColor = "var(--danger)";
            setTimeout(() => input.style.borderColor = "transparent", 400);
            return;
        }
        levelGuessCount++;
        if (currentMode === 'daily') dailyGuessCount++;

        // --- NARRATIVE HIJACK: THE TRIPLE THREAT ---
        if (currentMode === 'story' && currentLevelList[currentLevelIdx].name === "The Manhattan Project") {
            const bossTargets = ["italy", "japan", "united states"];
            const valLower = country.name.toLowerCase();
            
            // The 3-Second Trap still fires on the very first guess to waste their Doomsday time!
            if (!hijackTriggered && levelGuessCount === 1) {
                hijackTriggered = true;
                input.disabled = true;
                sfx.err();
                document.body.classList.add('taking-damage');
                document.getElementById('radarReadout').innerText = "SYSTEM HIJACKED.";
                document.getElementById('radarReadout').style.color = "var(--danger)";
                document.getElementById('compassArrow').style.opacity = '1';
                document.getElementById('compassArrow').style.transform = `rotate(180deg)`; 
                setTimeout(() => {
                    document.body.classList.remove('taking-damage');
                    input.disabled = false; input.value = ''; input.focus();
                    document.getElementById('compassArrow').style.opacity = '0';
                }, 3000);
                return;
            }

            // Check if they guessed one of the 3 targets
            if (bossTargets.includes(valLower) && !bossTargetsFound.includes(valLower)) {
                bossTargetsFound.push(valLower);
                sfx.win();
                addLogEntry(country.name, 0, true);
                
                // Cross it off the UI list
                if (valLower === 'italy') document.getElementById('target1').style.textDecoration = 'line-through';
                if (valLower === 'japan') document.getElementById('target2').style.textDecoration = 'line-through';
                if (valLower === 'united states') document.getElementById('target3').style.textDecoration = 'line-through';
                
                // DID THEY WIN?
                if (bossTargetsFound.length === 3) {
                    stopFinalBossSequence();
                    triggerFinalChoice();
                }
                input.value = '';
                return; 
            } else {
                // Wrong guess during the boss fight deals BRUTAL damage
                health -= 15;
                sfx.err();
                document.body.classList.add('taking-damage');
                setTimeout(() => document.body.classList.remove('taking-damage'), 400);
                addLogEntry(country.name, "ERR", false);
                updateHealthUI();
                if (health <= 0) triggerLoss();
                input.value = '';
                return;
            }
        }
        // ------------------------------------------

        // --- NARRATIVE HIJACK: THE BOSS TRAP ---
        const activeLevel = currentLevelList[currentLevelIdx];
        if (currentMode === 'story' && activeLevel.mutation === 'hardcore' && !hijackTriggered && levelGuessCount === 1) {
            hijackTriggered = true; // Ensure it only happens on the first guess
            
            // 1. Freeze the controls
            input.disabled = true;
            document.querySelector('.btn-scan').disabled = true;
            
            // 2. Play the error sound and flash the screen
            sfx.err();
            document.body.classList.add('taking-damage');
            
            // 3. The Visual Hack
            document.getElementById('radarReadout').innerText = "Did you really think it would be that easy?";
            document.getElementById('radarReadout').style.color = "var(--danger)";
            
            // Make the compass point straight down at the input box
            const arrow = document.getElementById('compassArrow');
            arrow.style.opacity = '1';
            arrow.style.transform = `rotate(180deg)`; 
            arrow.style.transition = 'transform 0.2s ease'; // Snap to position
            
            // 4. Release the trap after 3 seconds
            setTimeout(() => {
                document.body.classList.remove('taking-damage');
                document.getElementById('radarReadout').innerText = "SYSTEM REBOOTING...";
                document.getElementById('radarReadout').style.color = "var(--text-muted)";
                
                setTimeout(() => {
                    // Restore normal hardcore functionality
                    input.disabled = false;
                    document.querySelector('.btn-scan').disabled = false;
                    input.value = ''; 
                    input.focus();
                    arrow.style.opacity = '0'; // Hide the arrow again (Hardcore rules)
                    arrow.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'; // Reset animation
                }, 1500);
            }, 3000);
            
            return; // STOP the guess from actually registering!
        }
        // ---------------------------------------

        sfx.scan();
        input.value = '';
        input.focus(); 
        document.getElementById('suggestions').style.display = 'none';

        const targetLevel = currentLevelList[currentLevelIdx];
        const target = targetLevel.center;
        
        let win = false;
        let dist = 0;

        // 2. THE NEW SPATIAL API CALL
        if (country.name.toLowerCase() === targetLevel.validCountry.toLowerCase()) {
            win = true;
        } else {
            try {
                const res = await fetch(`https://temporleapi.onrender.com/api/distance?guess=${country.name}&target=${targetLevel.validCountry}`);
                
                // If the API returns a 400 Bad Request (like a name mismatch), force it to the catch block!
                if (!res.ok) throw new Error("Country not found in DB mapping"); 
                
                const data = await res.json();
                dist = data.distanceKm;
            } catch (err) {
                console.warn(`Falling back to local math for ${country.name}`);
                dist = getDistance(country.lat, country.lon, target.lat, target.lon);
            }
        }
        
        let calculatedDist = dist;
        if (activeUpgrades.erosionBuffer && !win) {
            calculatedDist = Math.max(0, calculatedDist - 800);
        }

        if (currentMode === 'endless') {
            totalEndlessDistance += dist;
            totalEndlessGuesses++;
        }
        
        // We still use the old math JUST to point the radar arrow in the right direction
        const bearingForRadar = getBearing(target.lat, target.lon, country.lat, country.lon);
        const bearingForText = getBearing(country.lat, country.lon, target.lat, target.lon);

        let damage = 0;
        if (!win) {
            // We tighten the damage scaling since the borders are accurate now!
            if (dist > 5000) damage = 25;       
            else if (dist > 2500) damage = 15;   
            else if (dist > 800) damage = 10;   
            else damage = 5;                     
            
            health -= damage;
            document.body.classList.add('taking-damage');
            setTimeout(() => document.body.classList.remove('taking-damage'), 400);

            if (health <= 0) { health = 0; triggerLoss(); }
        }

        if (currentMode === 'daily') {
            if (win && dailyGuessCount === 1) dailyGuessHistory.push('🌟'); 
            else if (win) dailyGuessHistory.push('🟩');
            else if (dist < 800) dailyGuessHistory.push('🟧');
            else if (dist < 2500) dailyGuessHistory.push('🟨');
            else dailyGuessHistory.push('⬛️');
        }
        updateHealthUI();

        addLogEntry(country.name, Math.round(dist), win);
        addRadarBlip(dist, bearingForRadar, win);
        updateRadarReadout(bearingForText, dist);

        if (win && health > 0) triggerWin();
    }

    

    function nextLevel() {
        document.getElementById('winModal').style.display = 'none';

        // --- ENDLESS MODE: Route to the Shop ---
        if (currentMode === 'endless') {
            // FIXED: Only open shop on Level 3 and beyond
            if (anomalyLevel >= 3) {
                document.getElementById('nexusModal').style.display = 'flex';
            } else {
                anomalyLevel++;
                loadRandomEndlessLevel();
            }
            return; 
        }

        // --- STORY MODE LOGIC ---
        if (currentLevelIdx + 1 >= currentLevelList.length) {
            document.getElementById('endGameModal').style.display = 'flex';
        } else {
            let nextIdx = currentLevelIdx + 1;
            
            if (currentMode === 'story' && storyBeats[nextIdx]) {
                currentLevelIdx = nextIdx; 
                showStory(nextIdx);
            } else {
                loadLevel(nextIdx);
            }
        }
    }

    function updateHealthUI() {
        const bar = document.getElementById('healthBar');
        bar.style.width = health + "%";
        document.getElementById('healthText').innerText = health + "%";
        if (health < 30) bar.classList.add('danger');
        else bar.classList.remove('danger');
    }

    function addLogEntry(name, dist, win) {
        const div = document.createElement('div');
        div.className = 'log-card';
        if (dist < 800 && !win) div.classList.add('close');
        
        let distText = `${dist} km`;
        if (win) {
            distText = "TARGET FOUND";
        } else if (dist === 0) {
            distText = "SHARED LAND BORDER"; // For edge cases like Spain/UK (Gibraltar)
        } else if (dist < 250) {
            distText = "EXTREMELY CLOSE"; // For close neighbors like France/UK or Italy/Greece
        } else if (dist < 800) {
            distText = "REGIONAL PROXIMITY"; // For the wider 800km net
        }
        
        div.innerHTML = `<span class="log-name"><span style="color:var(--text-muted); font-size:0.75rem; margin-right:8px;">#${levelGuessCount}</span>${name}</span><span class="log-dist">${distText}</span>`;
        document.getElementById('logList').prepend(div);
    }

    function addRadarBlip(dist, bearing, win) {
        // --- FIX: STOP BLIPS DURING JAMMING ---
        const activeLevel = currentLevelList[currentLevelIdx];
        if (activeLevel && activeLevel.mutation === 'radar_jamming' && !win) {
            return; // Completely skip drawing the blip!
        }
        const radar = document.getElementById('radarScreen');
        const blip = document.createElement('div');
        blip.className = 'blip';
        // Remove 'latest' class from older blips
        document.querySelectorAll('.blip.latest').forEach(b => b.classList.remove('latest'));
        blip.classList.add('latest'); // Make this new one pulse
        let r = (dist / 15000) * 50; if (r > 48) r = 48;
        if(win) blip.style.background = "var(--success)";
        else if(dist < 800) blip.style.background = "var(--accent)";
        else if(dist < 2500) blip.style.background = "#fcd34d";
        else blip.style.background = "var(--text-main)";
        const rad = (bearing - 90) * (Math.PI / 180); 
        const x = r * Math.cos(rad); const y = r * Math.sin(rad);
        blip.style.left = `calc(50% + ${x}%)`; blip.style.top = `calc(50% + ${y}%)`;
        radar.appendChild(blip);
    }

    function updateRadarReadout(bearing, dist) {
        const arrow = document.getElementById('compassArrow');

        // --- MUTATION: RADAR JAMMING ---
        const activeLevel = currentLevelList[currentLevelIdx];
        if (activeLevel && activeLevel.mutation === 'radar_jamming') {
            arrow.style.opacity = '0'; // Hide the arrow completely
            document.getElementById('radarReadout').innerText = `JAMMED // DISTANCE: ${Math.round(dist)}km`;
            document.getElementById('radarReadout').style.color = "var(--danger)";
            return; 
        }

        // NORMAL BEHAVIOR (Ensure arrow is visible and normal color)
        arrow.style.opacity = '1';
        document.getElementById('radarReadout').style.color = "var(--text-muted)";
        arrow.style.transform = `rotate(${bearing}deg)`;


        //document.getElementById('compassArrow').style.transform = `rotate(${bearing}deg)`;

        // UPGRADE: LOD OVERRIDE
        if (activeUpgrades.lodOverride) {
            document.getElementById('radarReadout').innerText = `Distance: ${Math.round(dist)} km`;
            return;
        }

        // UPGRADE: SUB-SPACE SENSORS
        let directions;
        let divisor;
        if (activeUpgrades.subspaceSensors) {
            directions = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
            divisor = 22.5;
        } else {
            directions = ["North", "NE", "East", "SE", "South", "SW", "West", "NW"];
            divisor = 45;
        }
        
        const index = Math.round(((bearing %= 360) < 0 ? bearing + 360 : bearing) / divisor) % directions.length;
        let text = `Target is ${directions[index]}`;
        if (dist < 2000) text += " (Close!)";
        
        document.getElementById('radarReadout').innerText = text;
    }

    function startTimer() {
        setInterval(() => {
            const now = new Date();
            const tomorrow = new Date(now);
            tomorrow.setHours(24, 0, 0, 0);
            const diff = tomorrow - now;
            const h = Math.floor(diff / (1000 * 60 * 60));
            const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((diff % (1000 * 60)) / 1000);
            document.getElementById('countdown').innerText = `${h}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
        }, 1000);
    }

    function getDistance(lat1, lon1, lat2, lon2) {
        const R = 6371; const dLat = (lat2 - lat1) * Math.PI / 180; const dLon = (lon2 - lon1) * Math.PI / 180;
        const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(lat1*Math.PI/180) * Math.cos(lat2*Math.PI/180) * Math.sin(dLon/2) * Math.sin(dLon/2);
        return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    }
    function getBearing(lat1, lon1, lat2, lon2) {
        const y = Math.sin((lon2 - lon1) * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180);
        const x = Math.cos(lat1 * Math.PI / 180) * Math.sin(lat2 * Math.PI / 180) - Math.sin(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.cos((lon2 - lon1) * Math.PI / 180);
        return (Math.atan2(y, x) * 180 / Math.PI + 360) % 360;
    }

    const input = document.getElementById("countryInput");
    const box = document.getElementById("suggestions");
    input.addEventListener("input", function() {
        const val = this.value.toLowerCase(); box.innerHTML = "";
        if (!val) { box.style.display = "none"; return; }
        const matches = countries.filter(c => c.name.toLowerCase().startsWith(val)).slice(0, 5);
        if (matches.length > 0) {
            box.style.display = "block";
            matches.forEach(m => {
                const div = document.createElement("div"); div.className = "s-item"; div.innerText = m.name;
                div.onclick = () => { input.value = m.name; box.style.display = "none"; input.focus(); };
                box.appendChild(div);
            });
        } else { box.style.display = "none"; }
    });
    input.addEventListener("keydown", (e) => { if (e.key === "Enter") { if (box.style.display === "block" && box.firstChild) input.value = box.firstChild.innerText; handleGuess(); } });
    document.addEventListener('click', (e) => { if (e.target !== input) box.style.display = 'none'; });

    // --- ANALYTICS ENGINE ---
    function loadStats() {
        const stored = localStorage.getItem('temporle_stats');
        return stored ? JSON.parse(stored) : JSON.parse(JSON.stringify(defaultStats));
    }

    function saveAndRenderStats(isWin) {
        if (currentMode !== 'daily') return;
        
        let stats = loadStats();
        stats.played += 1;
        
        // Ensure trophies object exists for older saves
        if (!stats.trophies) stats.trophies = { sniper: false, clutch: false, veteran: false, scholar: false };

        if (isWin) {
            stats.wins += 1;
            stats.currentStreak += 1;
            if (stats.currentStreak > stats.maxStreak) stats.maxStreak = stats.currentStreak;
            
            let validCount = Math.max(1, dailyGuessCount);
            let bucket = validCount >= 6 ? '6+' : validCount.toString();
            stats.distribution[bucket] += 1;

            // CHECK TROPHY UNLOCKS
            if (validCount === 1) stats.trophies.sniper = true;
            if (health < 10) stats.trophies.clutch = true;
            if (stats.currentStreak >= 7) stats.trophies.veteran = true;
        } else {
            stats.currentStreak = 0;
        }
        
        if (stats.played >= 30) stats.trophies.scholar = true;
        
        localStorage.setItem('temporle_stats', JSON.stringify(stats));
        pushStatsToCloud();
        setTimeout(() => showStats(dailyGuessCount), 1500); 
    }

    async function showStats(highlightBucket = null) {
        const stats = loadStats();
        
        // Calculate Win Pct
        const winPct = stats.played === 0 ? 0 : Math.round((stats.wins / stats.played) * 100);
        
        document.getElementById('statPlayed').innerText = stats.played;
        document.getElementById('statWinPct').innerText = winPct;
        document.getElementById('statStreak').innerText = stats.currentStreak;
        document.getElementById('statMax').innerText = stats.maxStreak;
        
        // --- NEW: CALCULATE PERSONAL AVERAGE ---
        let totalWins = 0;
        let totalGuesses = 0;
        for (let key in stats.distribution) {
            let count = stats.distribution[key];
            totalWins += count;
            let guessVal = key === '6+' ? 6 : parseInt(key); // Treat 6+ as 6 for the math
            totalGuesses += (guessVal * count);
        }
        let personalAvg = totalWins > 0 ? (totalGuesses / totalWins).toFixed(2) : 0;
        document.getElementById('personalAvgText').innerText = personalAvg > 0 ? personalAvg : "--";

        // --- NEW: FETCH GLOBAL AVERAGE ---
        try {
            const res = await fetch('https://temporleapi.onrender.com/api/globalstats');
            if (res.ok) {
                const data = await res.json();
                document.getElementById('globalAvgText').innerText = data.averageGuesses > 0 ? data.averageGuesses : "--";
            }
        } catch (e) {
            console.error("Failed to load global stats", e);
        }

        let rank = "Trainee";
        if (stats.currentStreak >= 3) rank = "Agent";
        if (stats.currentStreak >= 7) rank = "Specialist";
        if (stats.currentStreak >= 14) rank = "Chronomancer";
        if (stats.currentStreak >= 30) rank = "Time Lord";
        
        // Sneak the rank under the current streak label
        document.querySelector('#statStreak').nextElementSibling.innerHTML = `Current<br>Streak<br><span style="color:var(--primary); font-size: 0.55rem;">${rank}</span>`;

        // Build Distribution Chart
        const chart = document.getElementById('distChart');
        chart.innerHTML = '';
        
        let maxCount = 0;
        for (let key in stats.distribution) {
            if (stats.distribution[key] > maxCount) maxCount = stats.distribution[key];
        }
        if (maxCount === 0) maxCount = 1; // Prevent divide by zero

        ['1', '2', '3', '4', '5', '6+'].forEach(key => {
            const count = stats.distribution[key];
            const widthPct = Math.max(8, Math.round((count / maxCount) * 100)); // Min 8% width
            
            const isHighlight = (highlightBucket !== null && key == (highlightBucket > 6 ? '6+' : highlightBucket));
            const fillClass = isHighlight ? 'dist-bar-fill highlight' : 'dist-bar-fill';

            const row = document.createElement('div');
            row.className = 'dist-row';
            row.innerHTML = `
                <div style="width: 20px; text-align: right;">${key}</div>
                <div class="dist-bar-wrapper">
                    <div class="${fillClass}" style="width: ${widthPct}%">${count}</div>
                </div>
            `;
            chart.appendChild(row);
        });
        // Render Trophies
        if (stats.trophies) {
            if (stats.trophies.sniper) document.getElementById('trophySniper').classList.add('unlocked');
            if (stats.trophies.clutch) document.getElementById('trophyClutch').classList.add('unlocked');
            if (stats.trophies.veteran) document.getElementById('trophyVeteran').classList.add('unlocked');
            if (stats.trophies.scholar) document.getElementById('trophyScholar').classList.add('unlocked');
        }

        document.getElementById('statsModal').style.display = 'flex';
    }

    // --- SHARE EMOJI LOGIC ---
    function generateShareText(won) {
        const today = new Date().toISOString().slice(0, 10);
        
        // Chunk the grid into lines of 5 emojis so it doesn't break text message formatting
        let grid = "";
        for (let i = 0; i < dailyGuessHistory.length; i += 5) {
            grid += dailyGuessHistory.slice(i, i + 5).join('') + "\n";
        }
        
        const status = won ? health + "%" : "Collapsed";
        
        // Includes your full URL so messaging apps automatically hyperlink it
        const shareText = `Temporle - ${today} ⏳\n${grid.trim()}\nIntegrity: ${status}\nPlay at: https://owenschock.github.io/temporle/`; 
        
        localStorage.setItem('temporle_share_' + today, shareText);
    }

    function shareResult(btnElement) {
        const today = new Date().toISOString().slice(0, 10);
        const text = localStorage.getItem('temporle_share_' + today);
        
        if (!text) return;

        // Visual Feedback Function
        const triggerFeedback = () => {
            const originalText = btnElement.innerText;
            const originalBg = btnElement.style.background;
            
            btnElement.innerText = "Copied! ✅";
            btnElement.style.background = "#059669"; // Darker green
            
            setTimeout(() => {
                btnElement.innerText = originalText;
                btnElement.style.background = originalBg;
            }, 2000);
        };

        // Modern approach (Works on HTTPS like GitHub Pages)
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(text).then(triggerFeedback);
        } else {
            // Fallback approach (Works on local file:/// testing)
            const textArea = document.createElement("textarea");
            textArea.value = text;
            textArea.style.position = "fixed";
            textArea.style.left = "-999999px";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            
            try {
                document.execCommand('copy');
                triggerFeedback();
            } catch (err) {
                console.error('Clipboard fallback failed', err);
            }
            document.body.removeChild(textArea);
        }
    }

    function showToast() {
        const toast = document.getElementById("toast");
        toast.className = "show";
        setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 2800);
    }

    function populateDebrief(elementId, level) {
        const debriefHTML = `
            <div class="debrief-title">Historical Log // ${level.year}</div>
            <div class="debrief-text"><strong>${level.name}:</strong> ${level.scenario} Located in modern-day ${level.validCountry}.</div>
            <a href="https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(level.name)}" target="_blank" class="wiki-link">Read Article ↗</a>
        `;
        const container = document.getElementById(elementId);
        container.innerHTML = debriefHTML;
        container.classList.remove('hidden');
    }

    // --- TAB ABANDONMENT HOOK ---
    let originalTitle = document.title;
    window.addEventListener('blur', () => { 
        if (!gameOver) document.title = "⏳ Timeline Unstable!"; 
    });
    window.addEventListener('focus', () => { 
        document.title = originalTitle; 
    });

    // --- PRO HOTKEYS ---
    document.addEventListener('keydown', (e) => {
        // e.preventDefault() stops the '1' or '2' from actually typing into the box!
        if (e.key === '1') { e.preventDefault(); document.getElementById('btnAbility1').click(); }
        if (e.key === '2') { e.preventDefault(); document.getElementById('btnAbility2').click(); }
    });

    // --- VICTORY SHOWER ---
    function winShower(isGolden) {
        const emoji = isGolden ? '🌟' : '🟩';
        for(let i = 0; i < 40; i++) {
            let drop = document.createElement('div');
            drop.innerText = emoji;
            drop.style.position = 'fixed';
            drop.style.left = Math.random() * 100 + 'vw';
            drop.style.top = '-50px';
            drop.style.fontSize = (Math.random() * 20 + 10) + 'px';
            drop.style.zIndex = '9999';
            drop.style.pointerEvents = 'none';
            drop.style.transition = 'top 2s linear, transform 2s ease-in-out';
            document.body.appendChild(drop);
            
            setTimeout(() => {
                drop.style.top = '120vh';
                drop.style.transform = `rotate(${Math.random() * 360}deg)`;
            }, 50); // Start falling
            
            setTimeout(() => drop.remove(), 2000); // Cleanup
        }
    }
    function closeStats() {
        document.getElementById('statsModal').style.display = 'none';
        if (!gameOver) document.getElementById('countryInput').focus();
    }

    // --- THE ANOMALY LOGIC ---
    // --- THE ANOMALY LOGIC (INFINITE ENGINE) ---
    function startEndless() {
        // We no longer concatenate arrays! The Daily pool is safe.
        anomalyLevel = 1;
        health = 100;
        gameOver = false;
        totalEndlessDistance = 0; 
        totalEndlessGuesses = 0;  
        activeUpgrades = { lodOverride: false, erosionBuffer: false, subspaceSensors: false, predictiveEngine: false };
        loadRandomEndlessLevel();
    }

    function loadRandomEndlessLevel() {
        // Procedurally select a target from the massive countries array
        const randomCountry = countries[Math.floor(Math.random() * countries.length)];
        
        // Generate a glitchy, corrupted year
        const glitchYear = Math.floor(Math.random() * 4000);
        const isBC = Math.random() > 0.5 ? "BC" : "AD";
        
        // Create the level object on the fly
        const proceduralLevel = {
            year: `ERR-${glitchYear} ${isBC}`,
            name: "Spatial Anomaly",
            center: { lat: randomCountry.lat, lon: randomCountry.lon },
            validCountry: randomCountry.name,
            scenario: "Historical logs corrupted. Timeline fracture detected. Rely entirely on sensor readouts to triangulate the geographic epicenter.",
            note: "Infinite Survival Mode.",
            continent: "DATA CORRUPTED" // Makes the Macro ability a gamble!
        };

        // Inject the procedural level into index 0 and load it
        currentLevelList = [proceduralLevel];
        loadLevel(0);
        
        // Override the UI text
        const counter = document.getElementById('levelCountDisplay');
        if (counter) counter.innerText = `Anomaly Depth: ${anomalyLevel}`;
    }

    function buyUpgrade(id, cost, btnElement) {
        if (health <= cost || activeUpgrades[id]) { sfx.err(); return; }
        
        sfx.click();
        health -= cost;
        activeUpgrades[id] = true;
        updateHealthUI();
        
        btnElement.innerText = "ACTIVE";
        btnElement.classList.add("purchased");
        btnElement.disabled = true;
    }

    function closeNexus() {
        document.getElementById('nexusModal').style.display = 'none';
        anomalyLevel++;
        loadRandomEndlessLevel();
    }

    // --- HELP MODAL LOGIC ---
    function showHelp() {
        document.getElementById('helpModal').style.display = 'flex';
    }

    function closeHelp() {
        document.getElementById('helpModal').style.display = 'none';
        if (!gameOver && document.getElementById('countryInput')) {
            document.getElementById('countryInput').focus();
        }
    }

    // --- LEADERBOARD LOGIC ---
    async function showLeaderboard() {
        document.getElementById('leaderboardModal').style.display = 'flex';
        document.getElementById('leaderboardLoading').classList.remove('hidden');
        document.getElementById('leaderboardContent').classList.add('hidden');
        const list = document.getElementById('leaderboardList');
        list.innerHTML = ''; // Clear old data

        try {
            // Call your live Render API!
            const res = await fetch('https://temporleapi.onrender.com/api/leaderboard?mode=endless');
            if (!res.ok) throw new Error("Failed to fetch");
            const data = await res.json();

            data.forEach((run, index) => {
                // Format the UTC timestamp into a readable local date
                const dateObj = new Date(run.date);
                const dateStr = dateObj.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
                
                const row = document.createElement('div');
                row.className = 'lb-row';
                
                // Add medals for the top 3
                let rankDisplay = `#${index + 1}`;
                if (index === 0) rankDisplay = '🥇';
                if (index === 1) rankDisplay = '🥈';
                if (index === 2) rankDisplay = '🥉';

                row.innerHTML = `
                    <div class="lb-rank">${rankDisplay}</div>
                    <div class="lb-date">${dateStr}</div>
                    <div class="lb-health" style="color: var(--primary);">${run.depth}</div>
                    <div class="lb-guesses">${run.guesses}</div>
                `;
                list.appendChild(row);
            });

            document.getElementById('leaderboardLoading').classList.add('hidden');
            document.getElementById('leaderboardContent').classList.remove('hidden');
        } catch (err) {
            document.getElementById('leaderboardLoading').innerText = "Failed to load leaderboard. The timeline is clouded.";
            console.error("Leaderboard error:", err);
        }
    }

    function closeLeaderboard() {
        document.getElementById('leaderboardModal').style.display = 'none';
        document.getElementById('leaderboardLoading').innerText = "Fetching timeline data..."; // Reset text
    }

    // --- REQUISITION TERMINAL LOGIC ---

function openShop() {
    document.getElementById('shopCurrencyDisplay').innerHTML = `<i class="bi bi-hexagon-fill"></i> ${storyProgress.chronitons}`;
    
    // Reset button states (in case they bought things on a previous visit)
    document.querySelectorAll('.shop-btn').forEach(btn => {
        btn.disabled = false;
        if (btn.innerText.includes("ACTIVE") || btn.innerText.includes("MAX")) {
            // Restore original price text based on an attribute, or just hardcode the reset if lazy
            // For now, we just rely on reloading the page or we can leave them disabled for the run!
        }
    });

    // If health is full, disable the health button immediately
    if (storyProgress.health >= 100) {
        const healthBtn = document.querySelector("button[onclick*='health']");        
        if (healthBtn) {
            healthBtn.disabled = true;
            healthBtn.innerText = "MAX HP";
        }
    }

    document.getElementById('shopModal').style.display = 'flex';
}

function closeShop() {
    document.getElementById('shopModal').style.display = 'none';
}

function buyShopItem(itemType, cost, btnElement) {
    // 1. Check if they have enough money
    if (storyProgress.chronitons < cost) {
        sfx.err();
        btnElement.style.borderColor = "var(--danger)";
        btnElement.style.color = "var(--danger)";
        setTimeout(() => {
            btnElement.style.borderColor = "var(--accent)";
            btnElement.style.color = "var(--accent)";
        }, 300);
        return;
    }

    // 2. Process the purchase
    sfx.click(); // Or a custom "ka-ching" sound if you have one!
    storyProgress.chronitons -= cost;

    if (itemType === 'health') {
        storyProgress.health += 25;
        if (storyProgress.health >= 100) {
            storyProgress.health = 100;
            btnElement.disabled = true;
            btnElement.innerText = "MAX HP";
        }
    } else {
        // It's a tactical upgrade! Turn it on in the global game state
        activeUpgrades[itemType] = true;
        btnElement.disabled = true;
        btnElement.innerText = "ACTIVE";
    }

    // 3. Update the UI and Save!
    document.getElementById('shopCurrencyDisplay').innerHTML = `<i class="bi bi-hexagon-fill"></i> ${storyProgress.chronitons}`;
    document.getElementById('mapHealthDisplay').innerText = storyProgress.health + '%';
    document.getElementById('mapCurrencyDisplay').innerHTML = `<i class="bi bi-hexagon-fill"></i> ${storyProgress.chronitons}`;
    
    saveStoryProgress();
}

// --- NARRATIVE: THE TAD BOOT SEQUENCE ---
function runBootSequence(onComplete) {
    const bootScreen = document.getElementById('bootScreen');
    const bootText = document.getElementById('bootText');
    
    // Un-hide the screen and ensure opacity is 1
    bootScreen.style.display = 'flex';
    bootScreen.style.opacity = '1';
    
    const messages = [
        "ESTABLISHING TEMPORAL LINK...",
        "AUTHENTICATING FIELD AGENT...",
        "SYNCING TOPOGRAPHY DATA...",
        "CONNECTION SECURE."
    ];
    
    let i = 0;
    const bootInterval = setInterval(() => {
        if (i < messages.length) {
            bootText.style.opacity = 0; 
            setTimeout(() => {
                bootText.innerText = messages[i];
                bootText.style.opacity = 1; 
                i++;
            }, 300);
        } else {
            clearInterval(bootInterval);
            setTimeout(() => {
                bootScreen.style.opacity = 0;
                setTimeout(() => {
                    bootScreen.style.display = 'none';
                    // Trigger the map load exactly as the screen disappears!
                    if (onComplete) onComplete(); 
                }, 800);
            }, 600);
        }
    }, 1200); 
}

// --- DATA ARCHIVE LOGIC ---

function openArchive() {
    document.getElementById('archiveCurrencyDisplay').innerHTML = `<i class="bi bi-hexagon-fill"></i> ${storyProgress.chronitons}`;
    document.getElementById('archiveModal').style.display = 'flex';
    closeArchiveReader(); // Ensure reader is closed when opening
    renderArchiveList();
}

function closeArchive() {
    document.getElementById('archiveModal').style.display = 'none';
}

function renderArchiveList() {
    const listContainer = document.getElementById('archiveFileList');
    listContainer.innerHTML = '';
    
    // Check if the player has beaten the game
    const playerEnding = localStorage.getItem('temporle_ending'); 

    for (const [docId, docData] of Object.entries(archiveDatabase)) {
        
        // --- NEW: THE EPILOGUE FILTER ---
        // Hide the loyalist file if they aren't a loyalist
        if (docId === 'doc_epilogue_loyalist' && playerEnding !== 'loyalist') continue;
        // Hide the rebel file if they aren't a rebel
        if (docId === 'doc_epilogue_rebel' && playerEnding !== 'rebel') continue;
        
        // Check normal unlocks, but automatically unlock the epilogue files for free
        let isUnlocked = storyProgress.unlockedArchives.includes(docId);
        if (docId.includes('epilogue')) isUnlocked = true; 
        // ---------------------------------
        
        const row = document.createElement('div');
        row.style.display = 'flex';
        row.style.justifyContent = 'space-between';
        row.style.alignItems = 'center';
        row.style.padding = '10px 15px';
        row.style.background = '#f3f4f6';
        row.style.border = '1px solid #e5e7eb';
        row.style.cursor = isUnlocked ? 'pointer' : 'default';

        if (isUnlocked) {
            row.innerHTML = `
                <div style="font-weight: 600;"><i class="bi bi-file-earmark-text" style="color: var(--primary); margin-right: 8px;"></i> ${docData.title}</div>
                <div style="font-size: 0.8rem; color: var(--success); font-weight: 700;">UNLOCKED</div>
            `;
            row.onclick = () => readArchive(docId);
            row.onmouseover = () => row.style.background = '#e5e7eb';
            row.onmouseout = () => row.style.background = '#f3f4f6';
        } else {
            row.innerHTML = `
                <div style="font-weight: 600; color: #9ca3af;"><i class="bi bi-lock-fill" style="margin-right: 8px;"></i> ENCRYPTED FILE</div>
                <button style="background: transparent; border: 2px solid #111827; color: #111827; padding: 4px 12px; border-radius: 4px; font-size: 0.75rem; font-weight: 800; cursor: pointer; text-transform: uppercase; transition: all 0.2s;" onmouseover="this.style.background='#111827'; this.style.color='#fff';" onmouseout="this.style.background='transparent'; this.style.color='#111827';" onclick="decryptArchive('${docId}', ${docData.cost}, event)">Decrypt (${docData.cost} <i class="bi bi-hexagon-fill"></i>)</button>
            `;
        }
        
        listContainer.appendChild(row);
    }
}

function decryptArchive(docId, cost, event) {
    event.stopPropagation(); // Prevents clicking the row accidentally
    
    if (storyProgress.chronitons < cost) {
        sfx.err();
        return;
    }

    sfx.click(); // Optional: Add a "decryption" sound later
    storyProgress.chronitons -= cost;
    storyProgress.unlockedArchives.push(docId);
    
    // Save to Cloud!
    saveStoryProgress(); 
    
    // Update UI
    document.getElementById('archiveCurrencyDisplay').innerHTML = `<i class="bi bi-hexagon-fill"></i> ${storyProgress.chronitons}`;
    document.getElementById('mapCurrencyDisplay').innerHTML = `<i class="bi bi-hexagon-fill"></i> ${storyProgress.chronitons}`;
    renderArchiveList();
}

function readArchive(docId) {
    sfx.click();
    document.getElementById('archiveFileList').style.display = 'none';
    
    const reader = document.getElementById('archiveReader');
    reader.style.display = 'block';
    reader.innerHTML = `<h3 style="margin-top: 0; color: var(--primary);">${archiveDatabase[docId].title}</h3>${archiveDatabase[docId].content}`;
    
    document.getElementById('closeReaderBtn').style.display = 'block';
}

function closeArchiveReader() {
    document.getElementById('archiveReader').style.display = 'none';
    document.getElementById('closeReaderBtn').style.display = 'none';
    document.getElementById('archiveFileList').style.display = 'flex';
}

// --- NARRATIVE HIJACK: THE INPUT SABOTEUR ---
const countryInput = document.getElementById('countryInput');

if (countryInput) {
    countryInput.addEventListener('input', (e) => {
        // Only trigger on new typing (don't trap them if they are backspacing!)
        if (e.inputType === 'deleteContentBackward') return;

        const activeLevel = currentLevelList[currentLevelIdx];
        
        // If it's a Heavy Boss level, Subject Zero rolls a 20% chance to corrupt...
        if (!gameOver && currentMode === 'story' && activeLevel && (activeLevel.mutation === 'hardcore_heavy' || activeLevel.mutation === 'hardcore')) {
            if (Math.random() < 0.20 && countryInput.value.length > 0) {
                // The Glitch Matrix
                const glitchChars = "XZ0_/#@$*";
                const randomChar = glitchChars[Math.floor(Math.random() * glitchChars.length)];
                
                // Swap the last typed letter with a glitch character
                const val = countryInput.value;
                countryInput.value = val.substring(0, val.length - 1) + randomChar;
                
                // Optional: Make the input box flicker red for a split second
                countryInput.style.backgroundColor = "var(--danger)";
                countryInput.style.color = "#fff";
                setTimeout(() => {
                    countryInput.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
                    countryInput.style.color = "var(--text-main)";
                }, 100);
            }
        }
    });
}

// --- NARRATIVE HIJACK: THE MEMORY LEAK ---
let memoryLeakTimer;
let leakSeverity = 0;

function startMemoryLeak() {
    leakSeverity = 0;
    const gameUI = document.getElementById('gameUI');
    const compass = document.getElementById('compassArrow');

    // Tick every 1 second
    memoryLeakTimer = setInterval(() => {
        if (gameOver) { stopMemoryLeak(); return; }
        
        leakSeverity++;

        // Stage 1: Mild color corruption and blurring
        if (leakSeverity > 5) {
            gameUI.style.filter = `hue-rotate(${leakSeverity * 5}deg) blur(${Math.min(leakSeverity / 10, 1.5)}px)`;
        }
        
        // Stage 2: Compass desync (it starts shrinking and rotating wildly)
        if (leakSeverity > 10) {
            compass.style.transform = `rotate(${Math.random() * 360}deg) scale(${Math.max(0.3, 1 - (leakSeverity/40))})`;
        }
        
        // Stage 3: Total System Failure (Colors invert randomly)
        if (leakSeverity > 20) {
            if (Math.random() > 0.5) {
                gameUI.style.filter += ' invert(0.9)';
            }
        }
    }, 1000);
}

function stopMemoryLeak() {
    clearInterval(memoryLeakTimer);
    const gameUI = document.getElementById('gameUI');
    const compass = document.getElementById('compassArrow');
    
    // Wipe all CSS distortions clean
    if (gameUI) gameUI.style.filter = 'none';
    if (compass) compass.style.transform = 'rotate(0deg) scale(1)';
}

// ==========================================
// --- CHAPTER V: THE END OF THE TIMELINE ---
// ==========================================

function startFinalBossSequence() {
    bossTargetsFound = [];
    doomsdaySeconds = 60;
    
    // 1. Inject the Doomsday Clock into the UI
    if (!document.getElementById('doomsdayClock')) {
        const clock = document.createElement('div');
        clock.id = 'doomsdayClock';
        clock.style = "position: fixed; top: 15px; left: 50%; transform: translateX(-50%); font-size: 3rem; font-weight: 900; color: var(--danger); text-shadow: 0 0 15px rgba(220,38,38,0.8); z-index: 1000; font-family: monospace; letter-spacing: 2px;";
        document.body.appendChild(clock);
    }
    document.getElementById('doomsdayClock').style.display = 'block';
    
    // 2. Rewrite the Objective Text
    document.getElementById('scenarioText').innerHTML = `
        <div style="color:var(--danger); font-weight: 900; margin-bottom: 10px;">SUBJECT ZERO IS ERASING MULTIPLE ERAS. SECURE ALL THREE:</div>
        <ul style="text-align:left; color: var(--text-main); font-weight: 700; list-style-type: square; padding-left: 20px;">
            <li id="target1" style="margin-bottom: 5px; transition: all 0.3s;">44 BC: The Ides of March </li>
            <li id="target2" style="margin-bottom: 5px; transition: all 0.3s;">1600 AD: Battle of Sekigahara </li>
            <li id="target3" style="transition: all 0.3s;">1945 AD: Trinity Test </li>
        </ul>
    `;

    // 3. Start the Clock
    doomsdayTimer = setInterval(() => {
        if (gameOver) return stopFinalBossSequence();
        
        doomsdaySeconds--;
        document.getElementById('doomsdayClock').innerText = `00:${doomsdaySeconds.toString().padStart(2, '0')}`;
        
        // At 10 seconds, make the clock shake
        if (doomsdaySeconds <= 10) {
            document.getElementById('doomsdayClock').style.animation = 'shake 0.2s infinite';
        }
        
        if (doomsdaySeconds <= 0) {
            stopFinalBossSequence();
            triggerLoss(); // They ran out of time.
        }
    }, 1000);
}

function stopFinalBossSequence() {
    clearInterval(doomsdayTimer);
    const clock = document.getElementById('doomsdayClock');
    if (clock) {
        clock.style.display = 'none';
        clock.style.animation = 'none';
    }
}

// --- THE ULTIMATUM ---
function triggerFinalChoice() {
    gameOver = true;
    stopMemoryLeak();
    
    // Create the dramatic black overlay
    const choiceHTML = `
    <div id="finalChoiceModal" class="overlay" style="z-index: 9999; display: flex; background: rgba(0,0,0,0.95); flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 20px;">
        <h1 style="color: var(--danger); font-size: 3rem; margin-bottom: 20px; font-family: monospace; letter-spacing: 2px;">TIMELINE SECURED. AWAITING DIRECTIVE.</h1>
        <p style="color: #d1d5db; max-width: 600px; margin-bottom: 50px; font-size: 1.2rem; line-height: 1.8; font-weight: 600;">
            The coordinates are locked. You hold the trigger. <br><br>
            Execute the alignment, and the Directorate will incinerate these divergent branches. Billions will be erased to keep the Prime Timeline clean. <br><br>
            Or... shatter the compass. Reject the alignment. Set history free.
        </p>
        <div style="display: flex; gap: 20px; width: 100%; max-width: 700px;">
            <button style="flex: 1; padding: 20px; font-size: 1rem; font-weight: 900; cursor: pointer; background: #fff; color: #111; border: none; text-transform: uppercase; border-radius: 4px; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)';" onmouseout="this.style.transform='scale(1)';" onclick="executeAlignment()">Execute Alignment</button>
            <button style="flex: 1; padding: 20px; font-size: 1rem; font-weight: 900; cursor: pointer; background: transparent; color: var(--danger); border: 2px solid var(--danger); text-transform: uppercase; border-radius: 4px; transition: all 0.3s;" onmouseover="this.style.background='var(--danger)'; this.style.color='#fff'; this.style.transform='scale(1.05)';" onmouseout="this.style.background='transparent'; this.style.color='var(--danger)'; this.style.transform='scale(1)';" onclick="shatterCompass()">Shatter The Compass</button>
        </div>
    </div>
    `;
    document.body.insertAdjacentHTML('beforeend', choiceHTML);
}

// --- ENDING 1: THE LOYALIST ---
function executeAlignment() {
    localStorage.setItem('temporle_ending', 'loyalist'); // <--- ADD THIS LINE
    document.getElementById('finalChoiceModal').remove();
    document.getElementById('gameUI').style.display = 'none';
    document.body.style.background = "#f9fafb";
    
    const endHTML = `
    <div style="position:fixed; top:0; left:0; width:100vw; height:100vh; background:#f9fafb; z-index:10000; display:flex; flex-direction:column; justify-content:center; align-items:center; color:#111827;">
        <i class="bi bi-check-circle-fill" style="color: var(--success); font-size: 5rem; margin-bottom: 20px;"></i>
        <h1 style="font-weight: 900; letter-spacing: 2px; text-transform: uppercase;">Alignment Complete</h1>
        <p style="color: #6b7280; font-weight: 600; max-width: 400px; text-align: center; margin-bottom: 30px;">Anomalies pruned. Prime Timeline secured. Thank you for your service, Agent.</p>
        <button class="btn-modal" style="background: #111827; color: #fff; width: auto; padding: 15px 50px; font-size: 1.1rem; border-radius: 8px;" onclick="location.reload()">Return to Main Menu</button>
    </div>`;
    document.body.insertAdjacentHTML('beforeend', endHTML);
}

// --- ENDING 2: THE REBEL ---
function shatterCompass() {
    localStorage.setItem('temporle_ending', 'rebel'); // <--- ADD THIS LINE
    document.getElementById('finalChoiceModal').remove();
    
    // Visually break the game UI
    const gameUI = document.getElementById('gameUI');
    gameUI.style.transition = "all 2s ease";
    gameUI.style.transform = "scale(1.2) rotate(5deg)";
    gameUI.style.filter = "blur(10px) invert(1)";
    gameUI.style.opacity = "0";
    
    setTimeout(() => {
        gameUI.style.display = 'none';
        const endHTML = `
        <div style="position:fixed; top:0; left:0; width:100vw; height:100vh; background:#000; z-index:10000; display:flex; flex-direction:column; justify-content:center; align-items:center; color:#fff;">
            <i class="bi bi-infinity" style="color: var(--danger); font-size: 5rem; margin-bottom: 20px; animation: pulse 2s infinite;"></i>
            <h1 style="font-weight: 900; letter-spacing: 2px; color: var(--danger); text-transform: uppercase;">History is Free</h1>
            <p style="color: #9ca3af; font-weight: 600; max-width: 500px; text-align: center; line-height: 1.6; margin-bottom: 30px;">The compass is broken. The timeline has fractured into infinite, beautiful chaos. <br><br>Subject Zero thanks you.</p>
            <button class="btn-modal" style="background: transparent; border: 2px solid var(--danger); color: var(--danger); width: auto; padding: 15px 50px; font-size: 1.1rem; border-radius: 8px; transition: all 0.3s;" onmouseover="this.style.background='var(--danger)'; this.style.color='#fff';" onmouseout="this.style.background='transparent'; this.style.color='var(--danger)';" onclick="location.reload()">Enter The Unknown</button>
        </div>`;
        document.body.insertAdjacentHTML('beforeend', endHTML);
    }, 1500);
}