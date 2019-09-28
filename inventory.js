const INVENTORY = [
    {
        title: "push buttons",
        related_terms: ["momentary", "switch"],
        room: "Garage",
        container: "Small Parts",
        bin: "C1"
    },
    {
        title: "toggle switches",
        related_terms: [],
        room: "Garage",
        container: "Small Parts",
        bin: "C2"
    },
    {
        title: "male-male jumper cables - long",
        related_terms: ["wire"],
        room: "Garage",
        container: "Small Parts",
        bin: "D1"
    },
    {
        title: "male-female jumper cables - long",
        related_terms: ["wire"],
        room: "Garage",
        container: "Small Parts",
        bin: "D2"
    },
    {
        title: "female-female jumper cables - long",
        related_terms: ["wire"],
        room: "Garage",
        container: "Small Parts",
        bin: "D3"
    },
    {
        title: "male-male jumper cables - short",
        related_terms: ["wire"],
        room: "Garage",
        container: "Small Parts",
        bin: "D4"
    },
    {
        title: "micro-controllers",
        related_terms: ["raspberry pi", "arduino", "particle photon", "esp8266", "nodeMCU"],
        room: "Garage",
        container: "Small Parts",
        bin: "G1-2"
    },
    {
        title: "led display",
        related_terms: ["screen"],
        room: "Garage",
        container: "Small Parts",
        bin: "C3"
    },
    {
        title: 'breadboards',
        related_terms: [],
        room: 'Garage',
        container: 'Small Parts',
        bin: 'E1-2'
    },
    {
        title: 'relay modules',
        related_terms: [],
        room: 'Garage',
        container: 'Small Parts',
        bin: 'C4'
    },
    {
        title: 'spade bits',
        related_terms: ["hole saw", "drill bit"],
        room: 'Garage',
        container: 'Small Parts',
        bin: 'G17-18'
    },
    {
        title: 'drill screw bits',
        related_terms: ["philips", "standard", "star"],
        room: 'Garage',
        container: 'Small Parts',
        bin: 'A17'
    },
    {
        title: 'magnets',
        related_terms: [],
        room: 'Garage',
        container: 'Small Parts',
        bin: 'A18'
    },
    {
        title: 'AC to DC transformers',
        related_terms: ["converter"],
        room: 'Garage',
        container: 'Small Parts',
        bin: 'C5'
    },
    {
        title: 'DC voltage regulator',
        related_terms: [],
        room: 'Garage',
        container: 'Small Parts',
        bin: 'C6'
    },
    {
        title: 'servos',
        related_terms: ["DC motor"],
        room: 'Garage',
        container: 'Small Parts',
        bin: 'G5-6'
    },
    {
        title: 'electronic accessories',
        related_terms: ["buzzer", "speaker", "pins", "RFID", "components", "shield"],
        room: 'Garage',
        container: 'Small Parts',
        bin: 'G3-4'
    },
    {
        title: 'cable pieces',
        related_terms: ["usb", "wire"],
        room: 'Garage',
        container: 'Small Parts',
        bin: 'D5'
    },
    {
        title: 'cable grommets',
        related_terms: ["strain relief", "cord grips", "wire"],
        room: 'Garage',
        container: 'Small Parts',
        bin: 'E17-18'
    },
    {
        title: 'reed switches',
        related_terms: ["proximity sensor", "magnetic"],
        room: 'Garage',
        container: 'Small Parts',
        bin: 'C6'
    },
    {
        title: 'NFC tags',
        related_terms: ["stickers"],
        room: 'Garage',
        container: 'Small Parts',
        bin: 'D7'
    },
    {
        title: 'razor blades & box cutters',
        related_terms: ["knife"],
        room: 'Garage',
        container: 'Small Parts',
        bin: 'G19-20'
    },
    {
        title: 'miscellaneous tools',
        related_terms: ["pipets", "files", "clamps"],
        room: 'Garage',
        container: 'Small Parts',
        bin: 'G21-22'
    },
    {
        title: 'wire nuts',
        related_terms: ["ties"],
        room: 'Garage',
        container: 'Small Parts',
        bin: 'B8'
    },
    {
        title: 'wire crimps',
        related_terms: ["butt splices"],
        room: 'Garage',
        container: 'Small Parts',
        bin: 'B7'
    },
    {
        title: 'wire terminals',
        related_terms: ["spade"],
        room: 'Garage',
        container: 'Small Parts',
        bin: 'B6'
    },
    {
        title: 'caulk smoothing tools',
        related_terms: ["silicone"],
        room: 'Garage',
        container: 'Small Parts',
        bin: 'F17-18'
    },
    {
        title: "Compression pipe fittings",
        related_terms: [],
        room: "Garage",
        container: "Small Parts",
        bin: "A9"
    },
    {
        title: "counter sunk machine screws",
        related_terms: [],
        room: "Garage",
        container: "Small Parts",
        bin: "B9"
    },
    {
        title: "mounts",
        related_terms: [],
        room: "Garage",
        container: "Small Parts",
        bin: "C9"
    },
    {
        title: "ear plugs",
        related_terms: [],
        room: "Garage",
        container: "Small Parts",
        bin: "D9"
    },
    {
        title: "grommets & rivets",
        related_terms: [],
        room: "Garage",
        container: "Small Parts",
        bin: "E9-10"
    },
    {
        title: "abrasives",
        related_terms: [],
        room: "Garage",
        container: "Small Parts",
        bin: "F9-10"
    },
    {
        title: "adhesives & staples",
        related_terms: [],
        room: "Garage",
        container: "Small Parts",
        bin: "G9-10"
    },
    {
        title: "sheet metal screws",
        related_terms: [],
        room: "Garage",
        container: "Small Parts",
        bin: "A10"
    },
    {
        title: "carriage bolts",
        related_terms: [],
        room: "Garage",
        container: "Small Parts",
        bin: "B10"
    },
    {
        title: "wing nuts & thumb screws",
        related_terms: [],
        room: "Garage",
        container: "Small Parts",
        bin: "C10"
    },
    {
        title: "O rings",
        related_terms: [],
        room: "Garage",
        container: "Small Parts",
        bin: "D10"
    },
    {
        title: "blank-end machine screws",
        related_terms: [],
        room: "Garage",
        container: "Small Parts",
        bin: "A11"
    },
    {
        title: "machine screws",
        related_terms: [],
        room: "Garage",
        container: "Small Parts",
        bin: "B11"
    },
    {
        title: "machine bolts",
        related_terms: [],
        room: "Garage",
        container: "Small Parts",
        bin: "C11"
    },
    {
        title: "rubber washers",
        related_terms: [],
        room: "Garage",
        container: "Small Parts",
        bin: "D11"
    },
    {
        title: "Masonry screws & anchors",
        related_terms: ["concrete"],
        room: "Garage",
        container: "Small Parts",
        bin: "E11-12"
    },
    {
        title: "plumbing tape & sealant",
        related_terms: [],
        room: "Garage",
        container: "Small Parts",
        bin: "F11-12"
    },
    {
        title: "lube & solder tape",
        related_terms: [],
        room: "Garage",
        container: "Small Parts",
        bin: "G11-12"
    },
    {
        title: "wood screws",
        related_terms: [],
        room: "Garage",
        container: "Small Parts",
        bin: "A12"
    },
    {
        title: "lag screws",
        related_terms: [],
        room: "Garage",
        container: "Small Parts",
        bin: "B12"
    },
    {
        title: "machine nuts",
        related_terms: [],
        room: "Garage",
        container: "Small Parts",
        bin: "C12"
    },
    {
        title: "hook screws",
        related_terms: [],
        room: "Garage",
        container: "Small Parts",
        bin: "D12"
    },
    {
        title: "String & leather cord",
        related_terms: [],
        room: "Garage",
        container: "Small Parts",
        bin: "A13"
    },
    {
        title: "hog rings",
        related_terms: [],
        room: "Garage",
        container: "Small Parts",
        bin: "B13"
    },
    {
        title: "cotter pins",
        related_terms: [],
        room: "Garage",
        container: "Small Parts",
        bin: "C13"
    },
    {
        title: "conduit connectors",
        related_terms: [],
        room: "Garage",
        container: "Small Parts",
        bin: "D13"
    },
    {
        title: "retainers & mounts",
        related_terms: [],
        room: "Garage",
        container: "Small Parts",
        bin: "E13-14"
    },
    {
        title: "pipe fittings",
        related_terms: [],
        room: "Garage",
        container: "Small Parts",
        bin: "F13-14"
    },
    {
        title: "spring-loaded clips",
        related_terms: [],
        room: "Garage",
        container: "Small Parts",
        bin: "A14"
    },
    {
        title: "bare wire",
        related_terms: [],
        room: "Garage",
        container: "Small Parts",
        bin: "B14"
    },
    {
        title: "washers",
        related_terms: [],
        room: "Garage",
        container: "Small Parts",
        bin: "C14"
    },
    {
        title: "clips & rings",
        related_terms: [],
        room: "Garage",
        container: "Small Parts",
        bin: "A15"
    },
    {
        title: "auto bolts & auto fuses",
        related_terms: [],
        room: "Garage",
        container: "Small Parts",
        bin: "B15"
    },
    {
        title: "self tapping screws",
        related_terms: [],
        room: "Garage",
        container: "Small Parts",
        bin: "C15"
    },
    {
        title: "hose clamps",
        related_terms: [],
        room: "Garage",
        container: "Small Parts",
        bin: "F15-16"
    },
    {
        title: "shims & gadgets",
        related_terms: [],
        room: "Garage",
        container: "Small Parts",
        bin: "G15-16"
    },
    {
        title: "E rings & snap rings",
        related_terms: [],
        room: "Garage",
        container: "Small Parts",
        bin: "A16"
    },
    {
        title: "rubber bands",
        related_terms: [],
        room: "Garage",
        container: "Small Parts",
        bin: "B16"
    },
    {
        title: "springs",
        related_terms: [],
        room: "Garage",
        container: "Small Parts",
        bin: "C16"
    },
    {
    title: 'extra dividers',
    related_terms: ["separators"],
    room: 'Garage',
    container: 'Small Parts',
    bin: 'A24'
    }
]