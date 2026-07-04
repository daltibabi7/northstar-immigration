'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Star, ArrowRight, ArrowLeft, CheckCircle, Calendar,
  Clock, User, Mail, Phone, Globe, FileText, Upload,
  CreditCard, Video, MessageCircle, Zap, AlertCircle
} from 'lucide-react'

// ─── Data ─────────────────────────────────────────────────────────────────

const consultationTypes = [
  { id: '15min', label: '15-Minute Intro', duration: '15 min', price: '$75', desc: 'Quick eligibility check and initial guidance.', icon: Zap },
  { id: '30min', label: '30-Minute Session', duration: '30 min', price: '$150', desc: 'In-depth discussion of your immigration options.', icon: Clock },
  { id: '45min', label: '45-Minute Session', duration: '45 min', price: '$200', desc: 'Comprehensive review of your profile and strategy.', icon: Clock },
  { id: '60min', label: '60-Minute Full Session', duration: '60 min', price: '$250', desc: 'Complete strategy session with document checklist.', icon: FileText },
  { id: 'premium', label: 'Premium Consultation', duration: '90 min', price: '$500', desc: 'Priority booking, senior consultant, detailed action plan.', icon: Star },
  { id: 'emergency', label: 'Emergency Consultation', duration: '60 min', price: '$400', desc: 'Same-day or next-day urgent assistance.', icon: AlertCircle },
  { id: 'virtual', label: 'Virtual Consultation', duration: '60 min', price: '$150', desc: 'Video call via Zoom or Google Meet.', icon: Video },
  { id: 'phone', label: 'Phone Consultation', duration: '60 min', price: '$120', desc: 'Phone call at your convenience.', icon: Phone },
]

const services = [
  'Study Visa Assistance', 'Visitor Visa Assistance', 'Work Permit Assistance',
  'Permanent Residence', 'Express Entry', 'Provincial Nominee (PNP)',
  'Family Sponsorship', 'Temporary Resident Visa (TRV)', 'Visitor Record Extension',
  'Restoration of Status', 'LMIA Support', 'Proof of Funds Package',
  'Salary Package', 'Letter of Explanation (LOE)', 'Document Review',
  'Interview Preparation', 'Visa Refusal Review', 'Travel Documentation',
  'Business Immigration', 'Other',
]

const statuses = [
  'Canadian Citizen', 'Permanent Resident', 'Study Permit Holder', 'Work Permit Holder',
  'Visitor Visa Holder', 'No Status', 'Outside Canada', 'Other'
]

// Generate available time slots
const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM',
  '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
]

// ─── Calendar Helper ───────────────────────────────────────────────────────

function CalendarPicker({ selected, onSelect }: { selected: string; onSelect: (d: string) => void }) {
  const today = new Date()
  const [viewMonth, setViewMonth] = useState({ month: today.getMonth(), year: today.getFullYear() })
  const { month, year } = viewMonth

  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December']
  const dayNames = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const prevMonth = () => setViewMonth(v => v.month === 0 ? { month: 11, year: v.year - 1 } : { month: v.month - 1, year: v.year })
  const nextMonth = () => setViewMonth(v => v.month === 11 ? { month: 0, year: v.year + 1 } : { month: v.month + 1, year: v.year })

  const formatDate = (d: number) => `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`

  const isDisabled = (d: number) => {
    const date = new Date(year, month, d)
    const day = date.getDay()
    return date < today || day === 0 // past or Sunday
  }

  return (
    <div className="tech-card p-6 border border-gray-100 shadow-sm bg-white">
      <div className="flex items-center justify-between mb-6">
        <button onClick={prevMonth} className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors text-gray-500">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h3 className="font-semibold text-gray-900">{monthNames[month]} {year}</h3>
        <button onClick={nextMonth} className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors text-gray-500">
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-3">
        {dayNames.map(d => <div key={d} className="text-center text-gray-400 text-xs font-medium py-1">{d}</div>)}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: firstDay }).map((_, i) => <div key={`empty-${i}`} />)}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const d = i + 1
          const dateStr = formatDate(d)
          const disabled = isDisabled(d)
          const isSel = selected === dateStr
          return (
            <button
              key={d}
              disabled={disabled}
              onClick={() => onSelect(dateStr)}
              className={`aspect-square flex items-center justify-center rounded-lg text-sm transition-all ${
                disabled ? 'text-gray-300 cursor-not-allowed opacity-50' : 
                isSel ? 'bg-blue-600 text-white font-bold shadow-md' : 
                'text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium'
              }`}
            >
              {d}
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ─── Step Indicator ────────────────────────────────────────────────────────

function StepIndicator({ step }: { step: number }) {
  const steps = ['Service', 'Type', 'Details', 'Schedule', 'Confirm']
  return (
    <div className="flex items-center justify-center mb-12 overflow-x-auto pb-2">
      {steps.map((s, i) => (
        <div key={s} className="flex items-center">
          <div className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
              i + 1 < step ? 'bg-blue-600 text-white' : 
              i + 1 === step ? 'bg-blue-100 text-blue-600 border-2 border-blue-600' : 
              'bg-gray-100 text-gray-400'
            }`}>
              {i + 1 < step ? <CheckCircle className="w-4 h-4" /> : i + 1}
            </div>
            <span className={`text-xs mt-1.5 font-semibold ${i + 1 === step ? 'text-blue-600' : 'text-gray-400'}`}>{s}</span>
          </div>
          {i < steps.length - 1 && (
            <div className="w-12 md:w-20 mx-2 mb-4 h-1 rounded-full bg-gray-100 overflow-hidden relative">
              <div className="absolute top-0 left-0 h-full bg-blue-600 transition-all duration-500" style={{ width: i + 1 < step ? '100%' : '0%' }} />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

// ─── Main Booking Page ─────────────────────────────────────────────────────

export default function BookingPage() {
  const [step, setStep] = useState(1)
  const [booking, setBooking] = useState({
    service: '',
    consultationType: '',
    // Intake
    fullName: '', email: '', phone: '', nationality: '',
    countryOfResidence: '', immigrationStatus: '',
    preferredDate: '', preferredTime: '',
    reason: '', notes: '',
    // Files
    files: [] as string[],
    // Payment (demo)
    paymentMethod: 'card',
  })
  const [booked, setBooked] = useState(false)

  const update = (key: string, val: string) => setBooking(b => ({ ...b, [key]: val }))
  const selectedType = consultationTypes.find(t => t.id === booking.consultationType)

  if (booked) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-lg mx-auto px-6">
          <div className="w-24 h-24 rounded-full bg-emerald-100 border-2 border-emerald-200 flex items-center justify-center mx-auto mb-8 animate-bounce">
            <CheckCircle className="w-12 h-12 text-emerald-600" />
          </div>
          <h1 className="font-bold text-3xl text-gray-900 mb-4 tracking-tight">Booking Confirmed!</h1>
          <p className="text-gray-500 mb-6">
            Your consultation has been successfully scheduled.
          </p>
          <div className="tech-card p-6 mb-8 text-left space-y-3 bg-white">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Service</span>
              <span className="text-gray-900 font-medium">{booking.service}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Type</span>
              <span className="text-gray-900 font-medium">{selectedType?.label}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Date</span>
              <span className="text-gray-900 font-medium">{booking.preferredDate}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Time</span>
              <span className="text-gray-900 font-medium">{booking.preferredTime} EST</span>
            </div>
            <div className="flex justify-between text-sm pt-2 border-t border-gray-100">
              <span className="text-gray-500">Amount Paid</span>
              <span className="text-blue-600 font-bold">{selectedType?.price}</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm mb-8">
            A confirmation email with your <strong className="text-gray-900">Zoom meeting link</strong> and calendar invite has been sent to <strong className="text-blue-600">{booking.email}</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/portal" className="btn-primary">View in Client Portal</Link>
            <Link href="/" className="btn-secondary">Back to Home</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative overflow-hidden bg-white border-b border-gray-100 mb-12">
        <div className="absolute inset-0 bg-blue-50/50" />
        <div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16">
          <div className="text-left max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
              <Calendar className="w-3 h-3" /> Secure Booking
            </div>
            <h1 className="font-bold text-4xl lg:text-5xl text-gray-900 mb-4 tracking-tight leading-tight">
              Schedule your <span className="text-blue-600">strategy session.</span>
            </h1>
            <p className="text-gray-500 text-lg">
              Book a secure, confidential consultation with our elite immigration team in under 3 minutes.
            </p>
          </div>
          <div className="hidden lg:block relative h-64 rounded-3xl overflow-hidden shadow-2xl tech-card border-none bg-white">
            <Image 
              src="/images/tech_passport_booking_1783151615506.png"
              alt="Premium Booking"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <StepIndicator step={step} />

          {/* Step 1: Service Selection */}
          {step === 1 && (
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="font-bold text-2xl text-gray-900 mb-2 text-center tracking-tight">Which service do you need?</h2>
              <p className="text-gray-500 text-center mb-8">Select the immigration pathway you are seeking assistance with.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {services.map(s => (
                  <button
                    key={s}
                    onClick={() => update('service', s)}
                    className={`p-4 rounded-xl border text-left transition-all duration-200 ${
                      booking.service === s
                        ? 'bg-blue-50 border-blue-200 text-blue-700 shadow-sm'
                        : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <span className="font-semibold text-sm">{s}</span>
                  </button>
                ))}
              </div>
              <button
                disabled={!booking.service}
                onClick={() => setStep(2)}
                className="btn-primary w-full shadow-lg shadow-gray-200"
              >
                Continue <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          )}

          {/* Step 2: Consultation Type */}
          {step === 2 && (
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="font-bold text-2xl text-gray-900 mb-2 text-center tracking-tight">Choose consultation type</h2>
              <p className="text-gray-500 text-center mb-8">Select the duration and style of session that fits your needs.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {consultationTypes.map(({ id, label, duration, price, desc, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => update('consultationType', id)}
                    className={`p-5 rounded-xl border text-left transition-all duration-200 ${
                      booking.consultationType === id
                        ? 'bg-blue-50 border-blue-200 shadow-sm'
                        : 'bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Icon className={`w-5 h-5 ${booking.consultationType === id ? 'text-blue-600' : 'text-gray-400'}`} />
                        <span className={`font-bold text-sm ${booking.consultationType === id ? 'text-blue-700' : 'text-gray-900'}`}>{label}</span>
                      </div>
                      <span className="text-blue-600 font-bold">{price}</span>
                    </div>
                    <div className="text-gray-500 text-xs leading-relaxed">{desc}</div>
                    <div className="mt-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">{duration}</div>
                  </button>
                ))}
              </div>
              <div className="flex gap-4">
                <button onClick={() => setStep(1)} className="btn-secondary flex-1">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </button>
                <button
                  disabled={!booking.consultationType}
                  onClick={() => setStep(3)}
                  className="btn-primary flex-1 shadow-lg shadow-gray-200"
                >
                  Continue <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Intake Form */}
          {step === 3 && (
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="font-bold text-2xl text-gray-900 mb-2 text-center tracking-tight">Your Details</h2>
              <p className="text-gray-500 text-center mb-8">Please fill in your information securely.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input required className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none" placeholder="John Smith" value={booking.fullName} onChange={e => update('fullName', e.target.value)} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input required type="email" className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none" placeholder="john@email.com" value={booking.email} onChange={e => update('email', e.target.value)} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input required className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none" placeholder="+1 (416) 000-0000" value={booking.phone} onChange={e => update('phone', e.target.value)} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nationality *</label>
                  <div className="relative">
                    <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input required className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none" placeholder="e.g. Nigerian" value={booking.nationality} onChange={e => update('nationality', e.target.value)} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Country of Residence *</label>
                  <input required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none" placeholder="e.g. Nigeria" value={booking.countryOfResidence} onChange={e => update('countryOfResidence', e.target.value)} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Current Immigration Status *</label>
                  <select required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-gray-700" value={booking.immigrationStatus} onChange={e => update('immigrationStatus', e.target.value)}>
                    <option value="">Select status...</option>
                    {statuses.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div className="mb-5">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Reason for Consultation *</label>
                <textarea required rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none resize-none" placeholder="Briefly describe your immigration situation..." value={booking.reason} onChange={e => update('reason', e.target.value)} />
              </div>
              
              {/* Document Upload */}
              <div className="tech-card p-6 mb-8 bg-gray-50/50">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2"><Upload className="w-4 h-4 text-blue-500" /> Secure Document Upload</h3>
                <p className="text-gray-500 text-sm mb-4">Upload relevant documents via our encrypted gateway (Optional).</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['Passport', 'CV / Resume', 'Proof of Funds', 'Supporting Documents'].map(doc => (
                    <label key={doc} className="flex items-center gap-3 p-3 rounded-xl border border-dashed border-gray-300 bg-white hover:border-blue-400 cursor-pointer transition-colors group">
                      <FileText className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                      <div>
                        <div className="text-sm font-semibold text-gray-700">{doc}</div>
                        <div className="text-xs text-gray-500">Click to upload</div>
                      </div>
                      <input type="file" className="hidden" />
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button onClick={() => setStep(2)} className="btn-secondary flex-1">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </button>
                <button
                  disabled={!booking.fullName || !booking.email || !booking.phone}
                  onClick={() => setStep(4)}
                  className="btn-primary flex-1 shadow-lg shadow-gray-200"
                >
                  Continue <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Schedule */}
          {step === 4 && (
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="font-bold text-2xl text-gray-900 mb-2 text-center tracking-tight">Choose Date & Time</h2>
              <p className="text-gray-500 text-center mb-8">Select a time slot that works best for you.</p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <CalendarPicker selected={booking.preferredDate} onSelect={d => update('preferredDate', d)} />
                {booking.preferredDate && (
                  <div className="tech-card p-6 bg-white border border-gray-100 shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-1">Available Times</h3>
                    <p className="text-gray-500 text-sm mb-4 font-medium">{booking.preferredDate}</p>
                    <div className="grid grid-cols-2 gap-2 max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
                      {timeSlots.map(time => (
                        <button
                          key={time}
                          onClick={() => update('preferredTime', time)}
                          className={`p-2.5 rounded-lg text-sm font-bold transition-all ${
                            booking.preferredTime === time
                              ? 'bg-blue-600 text-white shadow-md'
                              : 'bg-gray-50 text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="flex gap-4">
                <button onClick={() => setStep(3)} className="btn-secondary flex-1"><ArrowLeft className="w-4 h-4 mr-2" /> Back</button>
                <button
                  disabled={!booking.preferredDate || !booking.preferredTime}
                  onClick={() => setStep(5)}
                  className="btn-primary flex-1 shadow-lg shadow-gray-200"
                >
                  Continue <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          )}

          {/* Step 5: Confirm & Pay */}
          {step === 5 && (
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="font-bold text-2xl text-gray-900 mb-2 text-center tracking-tight">Review & Confirm</h2>
              <p className="text-gray-500 text-center mb-8">Complete your payment securely to confirm the booking.</p>

              {/* Summary */}
              <div className="tech-card p-6 mb-8 bg-gray-50/50">
                <h3 className="font-semibold text-gray-900 mb-4">Booking Summary</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Service', value: booking.service },
                    { label: 'Consultation Type', value: selectedType?.label },
                    { label: 'Duration', value: selectedType?.duration },
                    { label: 'Client', value: booking.fullName },
                    { label: 'Email', value: booking.email },
                    { label: 'Date', value: booking.preferredDate },
                    { label: 'Time', value: booking.preferredTime + ' EST' },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between text-sm border-b border-gray-200 pb-2">
                      <span className="text-gray-500 font-medium">{label}</span>
                      <span className="text-gray-900 font-bold">{value}</span>
                    </div>
                  ))}
                  <div className="flex justify-between pt-2">
                    <span className="font-bold text-gray-900 text-lg">Total Amount</span>
                    <span className="font-bold text-blue-600 text-xl">{selectedType?.price}</span>
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div className="tech-card p-6 mb-8 bg-white border border-gray-100 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-blue-500" /> Payment Method
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  {[
                    { id: 'card', label: 'Card', icon: '💳' },
                    { id: 'paypal', label: 'PayPal', icon: '🔵' },
                    { id: 'etransfer', label: 'e-Transfer', icon: '🏦' },
                    { id: 'paystack', label: 'Paystack', icon: '🟢' },
                  ].map(({ id, label, icon }) => (
                    <button
                      key={id}
                      onClick={() => update('paymentMethod', id)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        booking.paymentMethod === id ? 'border-blue-300 bg-blue-50 ring-2 ring-blue-500/20' : 'border-gray-200 bg-white hover:bg-gray-50'
                      }`}
                    >
                      <div className="text-2xl mb-1">{icon}</div>
                      <div className="text-xs text-gray-700 font-bold">{label}</div>
                    </button>
                  ))}
                </div>
                {booking.paymentMethod === 'card' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Card Number</label>
                      <input className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none" placeholder="4242 4242 4242 4242" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Expiry</label>
                        <input className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none" placeholder="MM / YY" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">CVC</label>
                        <input className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none" placeholder="123" />
                      </div>
                    </div>
                  </div>
                )}
                {booking.paymentMethod === 'etransfer' && (
                  <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 text-sm text-blue-800 leading-relaxed">
                    Send your e-Transfer to <strong>payments@northstar.ca</strong> with the reference: <strong>{booking.email}</strong>.
                  </div>
                )}
              </div>

              <div className="flex gap-4">
                <button onClick={() => setStep(4)} className="btn-secondary">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </button>
                <button onClick={() => setBooked(true)} className="btn-primary flex-1 shadow-lg shadow-blue-500/30 bg-blue-600 hover:bg-blue-700 text-white border-none">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Confirm & Pay {selectedType?.price}
                </button>
              </div>

              <p className="text-center text-gray-400 text-xs mt-6 font-medium">
                🔒 Secured by Stripe 256-bit encryption. 
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
