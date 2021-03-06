SELECT DISTINCT p.id,
   cr.challenge_id,
   cr.participant_id,
   c.organizer_id,
   c.challenge,
   c.description,
   c.rules,
   c.prizes,
   c.resources,
   c.tagline,
   p.name,
   p.email,
   p.last_sign_in_at,
   p.bio,
   p.github,
   p.linkedin,
   p.twitter
  FROM participants p,
       challenges c,
       challenge_registrations cr
  WHERE cr.participant_id = p.id
    AND cr.challenge_id = c.id
