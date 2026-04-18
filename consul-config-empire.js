// ══════════════════════════════════════════════════════════════════════════════
// CONSUL_CONFIG — Empire / Riverside
//
// This file is the office-specific configuration for the Empire branch.
// Rename this file to consul-config.js and place it alongside index.html
// in the Empire GitHub branch. Never edit index.html for office-specific values.
//
// To deploy to a new office: copy this file, update all fields marked ← UPDATE,
// and place the renamed consul-config.js in that office's branch.
// ══════════════════════════════════════════════════════════════════════════════

const CONSUL_CONFIG = {
  brand:            'EMPIRE',                             // ← UPDATE
  primary_label:    'Riverside',                          // ← UPDATE
  tagline:          'EMPIRE — BUILDING CULTURE FORWARD',  // ← UPDATE

  sheets_id:        'REPLACE_WITH_EMPIRE_SHEETS_ID',      // ← UPDATE
  oauth_client_id:  'REPLACE_WITH_EMPIRE_OAUTH_CLIENT_ID', // ← UPDATE

  admin_email:          'REPLACE_WITH_ADMIN_EMAIL',       // ← UPDATE
  admin_phone:          'REPLACE_WITH_ADMIN_PHONE',       // ← UPDATE
  office_admin_email:   'REPLACE_WITH_ADMIN_EMAIL',       // ← UPDATE
  office_admin_phone:   'REPLACE_WITH_ADMIN_PHONE',       // ← UPDATE

  offices:          ['Riverside'],                        // ← UPDATE
  compare_offices:  ['Orange County'],                    // ← UPDATE

  office_colors: {
    'Riverside':      '#FF6200',                          // ← UPDATE
    'Orange County':  '#F2CF9C',
    'Newport Beach':  '#AADDDD',
  },

  office_meeting_info: {
    'Riverside': { days: '', time: '', address: '' },     // ← UPDATE
  },

  // Google Calendar embed URL for the Calendar tab
  calendar_src: 'https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&showPrint=0&src=Y19hYTdhNGFiZTBhZmM5NjY3OGYyOWI0MGQxYzE4YWI4ZWZiMmQxNGU1M2UxNTc3ZDlmMTQxMTMyNjQwMTNhYzE4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y19iOGJmZGE3OWUyOWU1ZDRlOWQzN2VkZjgzMzg1NGQ5NjhiMzBmNDM3NzFiYTBkNDlkMGM2ZWVlOTQ1YTU3MGQ0QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23d50000&color=%23f09300',

  // Skin accent colors — Empire orange brand
  accent: {
    cyan_light:        '#FF6200',                         // ← orange accent for Empire
    cyan_dark:         '#C44B00',
    near_black:        '#000000',
    border:            'rgba(255,98,0,0.22)',
    row_hover:         'rgba(255,98,0,0.08)',
    light_cyan_light:  '#CC4F00',
    light_cyan_dark:   '#8B3600',
    light_near_black:  '#E7E5E4',
    light_border:      'rgba(180,70,0,0.22)',
    light_row_hover:   'rgba(180,70,0,0.06)',
  },
};
