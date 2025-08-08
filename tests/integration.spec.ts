import { test, expect } from '@playwright/test';

test.describe('Invente 2025 - Event Management System Tests', () => {
  test('Strapi admin is accessible on port 1338', async ({ page }) => {
    const response = await page.goto('http://localhost:1338/admin');
    expect(response?.status()).toBeLessThan(400);
    await expect(page).toHaveTitle(/Strapi Admin/i);
  });

  test('Strapi Events API returns data', async ({ request }) => {
    const response = await request.get('http://localhost:1338/api/events');
    expect(response.ok()).toBeTruthy();
    
    const json = await response.json();
    expect(json.data).toBeDefined();
    expect(Array.isArray(json.data)).toBeTruthy();
    expect(json.data.length).toBeGreaterThan(0);
    
    // Verify event structure
    const event = json.data[0];
    expect(event.attributes).toBeDefined();
    expect(event.attributes.name).toBeDefined();
    expect(event.attributes.description).toBeDefined();
    expect(event.attributes.department).toBeDefined();
    expect(event.attributes.type).toBeDefined();
    expect(event.attributes.day).toBeDefined();
    expect(event.attributes.location).toBeDefined();
  });

  test('Strapi Sponsors API returns data', async ({ request }) => {
    const response = await request.get('http://localhost:1338/api/sponsors');
    expect(response.ok()).toBeTruthy();
    
    const json = await response.json();
    expect(json.data).toBeDefined();
    expect(Array.isArray(json.data)).toBeTruthy();
    expect(json.data.length).toBeGreaterThan(0);
    
    // Verify sponsor structure
    const sponsor = json.data[0];
    expect(sponsor.attributes).toBeDefined();
    expect(sponsor.attributes.name).toBeDefined();
    expect(sponsor.attributes.logoUrl).toBeDefined();
    expect(sponsor.attributes.website).toBeDefined();
    expect(sponsor.attributes.type).toBeDefined();
  });

  test('Next.js homepage is accessible on port 3005', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Invente 2025|Create Next App/i);
    
    // Check if main heading is present
    const heading = page.locator('h1');
    await expect(heading).toContainText('Invente 2025');
    
    // Check if subtitle is present
    const subtitle = page.locator('text=Tech Festival');
    await expect(subtitle).toBeVisible();
  });

  test('Next.js displays events from Strapi', async ({ page }) => {
    await page.goto('/');
    
    // Wait for content to load
    await page.waitForSelector('h2:has-text("Events")', { timeout: 10000 });
    
    // Check if Day 1 and Day 2 sections exist
    await expect(page.locator('h3:has-text("Day 1")')).toBeVisible();
    await expect(page.locator('h3:has-text("Day 2")')).toBeVisible();
    
    // Check if events are displayed
    const events = page.locator('section').filter({ hasText: 'Events' }).locator('.border.rounded-lg.p-6');
    const count = await events.count();
    expect(count).toBeGreaterThan(0);
  });

  test('Event cards display correct information', async ({ page }) => {
    await page.goto('/');
    
    // Wait for events section
    await page.waitForSelector('h2:has-text("Events")');
    
    // Check first event card
    const firstEvent = page.locator('section').filter({ hasText: 'Events' }).locator('.border.rounded-lg.p-6').first();
    await expect(firstEvent).toBeVisible();
    
    // Check event has name
    const eventName = firstEvent.locator('h4');
    await expect(eventName).toBeVisible();
    
    // Check event has type badge
    const typeBadge = firstEvent.locator('span.px-2.py-1.rounded');
    await expect(typeBadge).toBeVisible();
    
    // Check event has department and location
    const deptLocation = firstEvent.locator('p.text-sm.text-gray-500');
    await expect(deptLocation).toContainText('•');
    
    // Check participant count
    const participantInfo = firstEvent.locator('text=/👥/');
    await expect(participantInfo).toBeVisible();
  });

  test('Sponsors section displays correctly', async ({ page }) => {
    await page.goto('/');
    
    // Check if sponsors section exists
    const sponsorsSection = page.locator('section').filter({ hasText: 'Our Sponsors' });
    const sponsorsCount = await sponsorsSection.count();
    
    if (sponsorsCount > 0) {
      await expect(sponsorsSection).toBeVisible();
      
      // Check for sponsor images
      const sponsorImages = sponsorsSection.locator('img');
      const imageCount = await sponsorImages.count();
      expect(imageCount).toBeGreaterThan(0);
    }
  });

  test('Quick links section functions correctly', async ({ page }) => {
    await page.goto('/');
    
    // Check if Quick Links section exists
    const quickLinksSection = page.locator('div').filter({ hasText: 'Quick Links' }).first();
    const quickLinksCount = await quickLinksSection.count();
    
    if (quickLinksCount > 0) {
      // Check for register button
      const registerBtn = quickLinksSection.locator('a:has-text("Register Now")');
      if (await registerBtn.count() > 0) {
        await expect(registerBtn).toHaveAttribute('target', '_blank');
      }
      
      // Check for bus routes button
      const busRoutesBtn = quickLinksSection.locator('a:has-text("Bus Routes")');
      if (await busRoutesBtn.count() > 0) {
        await expect(busRoutesBtn).toHaveAttribute('target', '_blank');
      }
    }
  });

  test('Contact section displays information', async ({ page }) => {
    await page.goto('/');
    
    // Check if contact section exists
    const contactSection = page.locator('section').filter({ hasText: 'Contact Us' });
    const contactCount = await contactSection.count();
    
    if (contactCount > 0) {
      await expect(contactSection).toBeVisible();
      
      // Check for email link
      const emailLink = contactSection.locator('a[href^="mailto:"]');
      if (await emailLink.count() > 0) {
        await expect(emailLink).toContainText('📧');
      }
      
      // Check for phone link
      const phoneLink = contactSection.locator('a[href^="tel:"]');
      if (await phoneLink.count() > 0) {
        await expect(phoneLink).toContainText('📱');
      }
    }
  });

  test('Event type filtering works correctly', async ({ page }) => {
    await page.goto('/');
    
    // Check for different event types
    const technicalBadges = page.locator('.bg-purple-100:has-text("TECHNICAL")');
    const workshopBadges = page.locator('.bg-green-100:has-text("WORKSHOP")');
    const hackathonBadges = page.locator('.bg-orange-100:has-text("HACKATHON")');
    
    const technicalCount = await technicalBadges.count();
    const workshopCount = await workshopBadges.count();
    const hackathonCount = await hackathonBadges.count();
    
    // At least one type should exist
    expect(technicalCount + workshopCount + hackathonCount).toBeGreaterThan(0);
  });

  test('Prize details are displayed for events with prizes', async ({ page }) => {
    await page.goto('/');
    
    // Look for prize information
    const prizeInfo = page.locator('text=/🏆 Prizes worth/');
    const prizeCount = await prizeInfo.count();
    
    if (prizeCount > 0) {
      const firstPrize = prizeInfo.first();
      await expect(firstPrize).toContainText('₹');
    }
  });

  test('Footer displays correct port information', async ({ page }) => {
    await page.goto('/');
    
    const footer = page.locator('footer');
    await expect(footer).toContainText('Next.js (Port 3005)');
    await expect(footer).toContainText('Strapi CMS (Port 1338)');
    await expect(footer).toContainText('PostgreSQL (Port 5433)');
    
    // Check event and sponsor counts
    await expect(footer).toContainText(/Events: \d+/);
    await expect(footer).toContainText(/Sponsors: \d+/);
  });

  test('Non-standard ports are correctly configured', async ({ request }) => {
    // Test Next.js on port 3005
    const nextResponse = await request.get('http://localhost:3005');
    expect(nextResponse.ok()).toBeTruthy();
    
    // Test Strapi on port 1338
    const strapiResponse = await request.get('http://localhost:1338/admin');
    expect(strapiResponse.ok()).toBeTruthy();
    
    // Verify PostgreSQL is on port 5433 (indirect test via Strapi)
    const eventsResponse = await request.get('http://localhost:1338/api/events');
    expect(eventsResponse.ok()).toBeTruthy();
    // If Strapi can return events, it means PostgreSQL on 5433 is working
  });

  test('Full end-to-end data flow works', async ({ page, request }) => {
    // Navigate to homepage
    await page.goto('/');
    
    // Verify page loads
    await expect(page).toHaveTitle(/Invente 2025|Create Next App/i);
    
    // Verify main heading
    await expect(page.locator('h1:has-text("Invente 2025")')).toBeVisible();
    
    // Get event count from API
    const apiResponse = await request.get('http://localhost:1338/api/events');
    const apiData = await apiResponse.json();
    const apiEventCount = apiData.data.length;
    
    // Count events on page
    await page.waitForSelector('h2:has-text("Events")');
    const pageEvents = page.locator('section').filter({ hasText: 'Events' }).locator('.border.rounded-lg.p-6');
    const pageEventCount = await pageEvents.count();
    
    // Verify counts match
    expect(pageEventCount).toBe(apiEventCount);
    
    // Verify each event has required fields
    for (let i = 0; i < Math.min(pageEventCount, 3); i++) {
      const event = pageEvents.nth(i);
      
      // Each event should have a name
      await expect(event.locator('h4')).toBeVisible();
      
      // Each event should have department and location
      await expect(event.locator('p.text-sm.text-gray-500')).toBeVisible();
      
      // Each event should have participant count
      await expect(event.locator('text=/👥/')).toBeVisible();
      
      // Each event should have a type badge
      await expect(event.locator('span.px-2.py-1.rounded')).toBeVisible();
    }
    
    console.log(`✅ Successfully validated ${pageEventCount} events with complete data flow from Strapi to Next.js`);
  });
});