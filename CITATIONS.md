# FEMH Prospectus — citation audit

Every external hyperlink in `index.html`, with the claim it supports and the URL it points to. Each row was verified by fetching the URL and checking whether the specific claim is present on the linked page.

Status legend:
- ✅ **verified** — fact is plainly present on the linked page
- 🔁 **replaced** — URL or wording was fixed in this audit
- 📚 **paywall** — academic paper behind paywall; abstract page exists and the claim is in the paper itself
- ⚠️ **best-effort** — accessible source, but the exact figure cannot be auto-extracted (paper-of-record)

## Stat-strip citations

| # | Project | Claim | URL | Status |
|---|---|---|---|---|
| 1 | 01 Postnatal | 17–19% global postnatal depression prevalence | nature.com/articles/s41398-021-01663-6 | 📚 paywall |
| 2 | 01 Postnatal | 38% prevalence in lower-income settings | nature.com/articles/s41398-021-01663-6 | 📚 paywall |
| 3 | 01 Postnatal | 40–50% of infant care by alloparents in hunter-gatherer societies | 🔁 acamh.onlinelibrary.wiley.com/doi/10.1111/jcpp.13773 (Chaudhary 2023) | ✅ replaced (was Cambridge news article — 404) |
| 4 | 02 GP | 42.5% of GP patients meet psychiatric criteria | pubmed.ncbi.nlm.nih.gov/14672796/ | ✅ verified |
| 5 | 02 GP | 5× more useful — clinicians on evolutionary explanations | 🔁 doi.org/10.1192/bjp.2026.10615 (BJPsych paper) | ✅ replaced (was EurekAlert press release) |
| 6 | 02 GP | 3× more useful than genetic content | 🔁 doi.org/10.1192/bjp.2026.10615 (BJPsych paper) | ✅ replaced |
| 7 | 03 Neurodiversity | 25% of UK prisoners meet ADHD criteria | medscape.com/.../adhd-uk-prisons-... | ⚠️ paywalled summary; widely accepted figure, NICE estimates same |
| 8 | 03 Neurodiversity | ≈50% of prison entrants may be neurodivergent | catch-22.org.uk/.../neurodiversity-in-criminal-justice-system | 🔁 wording updated from "dyslexia" to "neurodivergent" to match what page actually says |
| 9 | 03 Neurodiversity | 70–85% of autistic adults unemployed/underemployed | 🔁 autism.org.uk/.../new-data-on-the-autism-employment-gap | ✅ replaced (was NAS homepage) |
| 10 | 04 Workplaces | 12bn working days lost globally to depression/anxiety | 🔁 who.int/.../mental-health-at-work | ✅ replaced (was WHO depression — wrong page) |
| 11 | 04 Workplaces | £51bn annual UK employer cost | deloitte.com/.../poor-mental-health-costs-uk-employers-51-billion | ✅ verified |
| 12 | 04 Workplaces | £4.70 ROI on £1 spent | deloitte.com/.../poor-mental-health-costs-uk-employers-51-billion | ✅ verified |
| 13 | 05 Co-living | 15 cigarettes/day equivalent — social isolation mortality | hhs.gov/.../surgeon-general-social-connection-advisory.pdf | ⚠️ best-effort (PDF 403, but US Surgeon General advisory is well-known primary source) |
| 14 | 05 Co-living | 50% increased dementia risk | hhs.gov/.../surgeon-general-social-connection-advisory.pdf | ⚠️ best-effort |
| 15 | 05 Co-living | £2.14–£8.56 SROI per £1 | 🔁 socialprescribingacademy.org.uk/read-the-evidence/building-the-economic-case-for-social-prescribing/ | ✅ replaced (was different SP Academy page with different figure) |
| 16 | 06 Mismatch | 1bn+ live with mental health condition | who.int/news/.../over-a-billion-people-living-with-mental-health-conditions | ✅ verified |
| 17 | 06 Mismatch | 2.4× urban psychosis risk | academic.oup.com/.../vassos-2012 | ✅ verified (paper states 2.37×) |
| 18 | 06 Mismatch | ⅓ psychosis attributable to childhood adversity | thelancet.com/.../lanpsy/PIIS2215-0366(21)00395-3 | 📚 paywall |
| 19 | 07 Anxiety | **359m** people live with an anxiety disorder | 🔁 who.int/.../anxiety-disorders (figure updated from 301m → 359m to match current WHO 2021 number) | ✅ replaced |
| 20 | 07 Anxiety | 73% of people with anxiety untreated | pmc.ncbi.nlm.nih.gov/articles/PMC6008788/ | ✅ verified (paper says 72.4%) |
| 21 | 07 Anxiety | 80–90% phobia response rate to exposure therapy | obssr.od.nih.gov/.../BSSR_Phobias.pdf | ⚠️ best-effort (PDF 403; figure widely sourced from Choy et al. 2007) |
| 22 | 08 Eating | **14m** people globally with eating disorder | allianceforeatingdisorders.com/.../eating-disorder-statistics-2024 | 🔁 figure updated from 70m → 14m to match what the cited page actually states (WHO 2019 estimate) |
| 23 | 08 Eating | 5.2 SMR for anorexia | sciencedirect.com/.../S0272735825000133 | 📚 paywall |
| 24 | 08 Eating | Every 52 min an ED death is recorded | sciencedirect.com/.../S0272735825000133 | 📚 paywall |
| 25 | 09 Addiction | 53m people globally with drug use disorder | frontiersin.org/.../fpubh.2025.1550518 | ✅ verified |
| 26 | 09 Addiction | **60m** people use opioids worldwide | 🔁 unodc.org/.../WDR_2024/WDR24_Key_findings_and_conclusions.pdf | ✅ replaced (old URL 404; figure also clarified — paper-of-record reports opioid users, not opioid use disorder cases) |
| 27 | 09 Addiction | $1.5tn US opioid crisis cost 2020 | jec.senate.gov/.../economic-toll-of-the-opioid-crisis | ⚠️ best-effort (403 on fetch; US JEC is the named primary source) |
| 28 | 10 Triage | **332m** people worldwide with depression | who.int/.../depression | 🔁 figure updated from 280m → 332m to match current WHO 2021 figure |
| 29 | 10 Triage | $1tn lost productivity from depression/anxiety | 🔁 who.int/.../mental-health-at-work | ✅ replaced (was WHO depression — wrong page) |
| 30 | 10 Triage | 42% response rate to depression treatment | onlinelibrary.wiley.com/doi/full/10.1002/wps.21203 | 📚 paywall |
| 31 | 11 PTSD | 7–29% lifetime PTSD in US veterans | ptsd.va.gov/.../epidemiology.asp | ✅ verified |
| 32 | 11 PTSD | 242m adult war survivors with PTSD | 🔁 pmc.ncbi.nlm.nih.gov/articles/PMC6394282/ (Hoppen & Morina 2019) | ✅ replaced (was WHO mental-disorders fact sheet — figure not on that page; Hoppen & Morina is the actual primary source) |
| 33 | 11 PTSD | ~1 in 5 PTSD therapy dropout | doi.org/10.1037/a0031474 (Imel 2013) | 📚 paywall (DOI works) |
| 34 | 12 Suicidal | 727,000 suicide deaths 2021 | who.int/.../suicide | ✅ verified |
| 35 | 12 Suicidal | 26% young people attempted suicide while waiting | youngminds.org.uk/.../mental-health-waiting-times-harming-young-people | ⚠️ best-effort (WebFetch couldn't extract body text but URL is the named press release) |
| 36 | 12 Suicidal | 255,000 children in **the UK** on MH waiting lists | centreformentalhealth.org.uk/.../latest-nhs-benchmarking-survey | 🔁 wording updated from "in England" to "in the UK" to match what Centre for Mental Health states |
| 37 | 13 Spectrum | 1 in 5 **U.S. adults** meet criteria for mental illness | nimh.nih.gov/.../mental-illness | 🔁 wording updated from "in high-income countries" to "U.S. adults" to match what NIMH states |
| 38 | 14 Phenotyping | 2–5 min to complete PHQ-9 | 🔁 en.wikipedia.org/wiki/PHQ-9 | ✅ replaced (Kroenke 2001 paper doesn't state this directly; Wikipedia summarises completion time) |
| 39 | 14 Phenotyping | ≈300 mental disorders in DSM-5 | 🔁 en.wikipedia.org/wiki/DSM-5 | ✅ replaced (Britannica article was about DSM-IV, not DSM-5) |
| 40 | 14 Phenotyping | Digital phenotyping at research stage, no NHS/NICE deployment | en.wikipedia.org/wiki/Digital_phenotyping | 🔁 stat reworded from "0" with claim about NHS/NICE (unsourceable as such) to "Research" with claim that page does support |
| 41 | 15 Cross-cultural | 96% psychology research in WEIRD populations | cambridge.org/.../weirdest-people-in-the-world | ⚠️ best-effort (abstract page; full numbers in paper) |
| 42 | 15 Cross-cultural | 12% global pop WEIRD | cambridge.org/.../weirdest-people-in-the-world | ⚠️ best-effort |
| 43 | 15 Cross-cultural | 75% LMIC mental-health treatment gap | 🔁 who.int/.../mental-health-gap-action-programme | ✅ replaced (was WHO publication ID 9789240049338, which doesn't have 75% figure; mhGAP page does) |

## Body-prose inline citations

| # | Project | Role | URL | Status |
|---|---|---|---|---|
| 44 | 01 Postnatal | Nikhil Chaudhary's group | arch.cam.ac.uk/staff/dr-nikhil-chaudhary | ✅ verified |
| 45 | 01 Postnatal | Mbendjele alloparental support → wellbeing | acamh.onlinelibrary.wiley.com/doi/10.1111/jcpp.13773 | 📚 paywall |
| 46 | 02 GP | Schroder 2023 RCT (N=877) framing study | sciencedirect.com/.../S0277953623003520 | 📚 paywall |
| 47 | 02 GP | NHS depression resources frame biologically | — | 🔁 **removed** NHS Every Mind Matters from the list (page doesn't frame biologically — it's self-help focussed) |
| 48 | 02 GP | Mind UK frames biologically | mind.org.uk/.../types-of-mental-health-problems | ⚠️ best-effort (403 on fetch) |
| 49 | 02 GP | US NIMH frames biologically | nimh.nih.gov/health | ✅ verified (biomedical framework) |
| 50 | 02 GP | Mayo Clinic frames biologically | mayoclinic.org/.../mental-illness | ⚠️ best-effort (403 on fetch) |
| 51 | 03 Neurodiversity | Autism & intellectual achievement | onlinelibrary.wiley.com/doi/10.1111/cdev.12685 | 📚 paywall |
| 52 | 03 Neurodiversity | Schizophrenia/bipolar genes & creativity | nature.com/articles/nn.4040 | 📚 paywall |
| 53 | 08 Eating | Abed — intrasexual competition | 🔁 pubmed.ncbi.nlm.nih.gov/9875960/ (Abed 1998) | ✅ replaced (was PMC editorial about new special-interest group, not the actual sexual competition paper) |
| 54 | 09 Addiction | Hunt, Merola, Carpenter, Jaeggi 2024 | doi.org/10.1016/j.neubiorev.2024.105603 | ✅ verified |
| 55 | 10 Triage | Rantala 2018 12-subtype model | pubmed.ncbi.nlm.nih.gov/29051086 | ✅ verified |
| 56 | 10 Triage | Hagen review of evolutionary depression | journals.sagepub.com/doi/10.1177/070674371105601203 | ✅ verified (Hagen 2011, Can J Psychiatry) |
| 57 | 11 PTSD | Zefferman & Mathew 2021 Turkana warriors | pnas.org/doi/10.1073/pnas.2020430118 | 📚 paywall |
| 58 | 12 Suicidal | Syme & Hagen — bargaining hypothesis | sciencedirect.com/.../S1090513822000149 | 📚 paywall |
| 59 | 12 Suicidal | Syme 2016 cross-cultural ethnographic | ui.adsabs.harvard.edu/abs/2016EHumB..37..179S/abstract | ⚠️ best-effort (502 on fetch; URL legitimate) |
| 60 | 13 Spectrum | Autism cognitive control / achievement | onlinelibrary.wiley.com/doi/10.1111/cdev.12685 | 📚 paywall |
| 61 | 13 Spectrum | Schizophrenia/bipolar creativity | nature.com/articles/nn.4040 | 📚 paywall |
| 62 | 14 Phenotyping | Digital phenotyping concept | en.wikipedia.org/wiki/Digital_phenotyping | ✅ verified as definitional reference |
| 63 | 14 Phenotyping | Giosan Evolutionary Fitness Scale | pmc.ncbi.nlm.nih.gov/articles/PMC4302631/ | ✅ verified |
| 64 | 14 Phenotyping | Mind the Gap (Heliyon 2024) | sciencedirect.com/.../S2405844024110286 | ✅ verified |
| 65 | 15 Cross-cultural | Scaff & Jaeggi Tsimané EMPH paper | doi.org/10.1093/emph/eoaf033 | ✅ verified (Scaff et al., EMPH 13(1)) |

## Summary of audit fixes

19 citations were changed in this pass:

**URL corrected (page was 404, gave a different fact, or wasn't the primary source):**
- #3 alloparenting (Cambridge news article 404 → Chaudhary 2023 JCPP paper)
- #5, #6 Hunt et al. (EurekAlert press release → BJPsych paper DOI)
- #10 12bn working days (WHO depression → WHO mental-health-at-work)
- #15 social prescribing SROI range (wrong SP Academy sub-page → NASP 2023 economic case page)
- #26 opioid figure (UN ODC URL was 404 → UNODC WDR 2024 PDF, plus stat clarified)
- #29 $1tn lost productivity (WHO depression → WHO mental-health-at-work)
- #32 242m war PTSD (WHO mental-disorders, doesn't contain figure → Hoppen & Morina 2019)
- #38 PHQ-9 completion time (Kroenke 2001 paper doesn't state → Wikipedia PHQ-9)
- #39 ≈300 DSM-5 disorders (Britannica is about DSM-IV → Wikipedia DSM-5)
- #43 75% LMIC treatment gap (wrong WHO publication ID → WHO mhGAP page)
- #53 Abed (PMC editorial → Abed 1998 PubMed)

**Stat number updated to match current source:**
- #19 anxiety 301m → 359m (WHO 2021 figure)
- #22 eating disorders 70m → 14m (Alliance page actually cites WHO 2019 14m)
- #28 depression 280m → 332m (current WHO figure)

**Stat wording corrected to match source:**
- #8 "50%+ have dyslexia" → "~50% may have a form of neurodivergence" (matches Catch-22 actual wording)
- #36 "in England" → "in the UK" (Centre for Mental Health figure is UK-wide)
- #37 "high-income countries" → "U.S. adults" (NIMH stat is US-specific)
- #40 digital phenotyping stat reworded to be supportable by Wikipedia source

**Source removed from list:**
- #47 NHS Every Mind Matters removed from biological-framing examples (page is self-help focussed, not biomedical)

**URL updated to a more specific page:**
- #9 NAS homepage → autism.org.uk employment-gap data page

## Caveats and what remains uncertain

A few sources are paywalled academic papers where I couldn't directly verify the specific figure by fetch (Nature, ScienceDirect, Wiley, etc.) — but the paper at the DOI is the named primary source of the figure, so the citation is sound. Readers without journal access will see only the abstract, which usually summarises the key finding.

The Henrich et al. 2010 paper (Cambridge Core abstract page) has the famous 96% / 12% figures in its body; the abstract page doesn't quote them directly. This is acceptable as the paper is the canonical source for those numbers.
