import { motion } from 'framer-motion'
import multilayerSwitch from '../assets/multilayer-switch.png'
import routerImg from '../assets/router.png'

const staggerItem = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

interface NetworkingSectionProps {
  onOpenDeviceModal: (device: { src: string; title: string; desc: string }) => void
}

export default function NetworkingSection({ onOpenDeviceModal }: NetworkingSectionProps) {
  const fundamentals = [
    { title: 'OSI Model', desc: '7 layers: Physical, Data Link, Network, Transport, Session, Presentation, Application' },
    { title: 'TCP/IP Model', desc: '4 layers: Link, Internet, Transport, Application - modern network architecture' },
    { title: 'TCP vs UDP', desc: 'TCP: reliable, ordered, connection-based | UDP: fast, connectionless, unreliable' },
    { title: 'LAN vs WAN', desc: 'LAN: local networks (home/office) | WAN: wide area networks (internet)' },
    { title: 'Client-Server', desc: 'Centralized model where clients request services from servers' },
    { title: 'Peer-to-Peer', desc: 'Distributed model where devices act as both clients and servers' }
  ]

  const devices = [
    { src: multilayerSwitch, title: 'Multilayer Switch', desc: 'Layer 2/3 switch for VLAN configuration, switching, and routing' },
    { src: routerImg, title: 'Network Router', desc: 'Routes traffic between networks using routing protocols' }
  ]

  const ipAddressing = [
    { title: 'IPv4 Structure', desc: '32-bit address: 4 octets (0-255) e.g., 192.168.1.1' },
    { title: 'Public vs Private IPs', desc: 'Public: routable on internet | Private: 10.x.x.x, 172.16-31.x.x, 192.168.x.x' },
    { title: 'CIDR Notation', desc: 'Classless Inter-Domain Routing: /24 = 255.255.255.0 subnet mask' },
    { title: 'Subnetting', desc: '/24 = 256 IPs, /26 = 64 IPs, /28 = 16 IPs - dividing networks efficiently' }
  ]

  const protocols = [
    { title: 'HTTP/HTTPS', desc: 'Web protocol | HTTPS adds encryption for secure communication' },
    { title: 'FTP', desc: 'File Transfer Protocol - transferring files between systems' },
    { title: 'DNS', desc: 'Domain Name System - translates domain names to IP addresses' },
    { title: 'DHCP', desc: 'Automatic IP assignment to devices on a network' },
    { title: 'ARP', desc: 'Address Resolution Protocol - maps IP addresses to MAC addresses' },
    { title: 'ICMP (Ping)', desc: 'Internet Control Message Protocol - tests connectivity between devices' }
  ]

  const tools = [
    { tool: 'Cisco Packet Tracer', desc: 'Network simulation - core tool for all projects' },
    { tool: 'Cisco CLI', desc: 'Command-line configuration of routers and switches' },
    { tool: 'Wireshark', desc: 'Packet analysis and network protocol inspection' },
    { tool: 'Ping / Ipconfig', desc: 'Basic troubleshooting utilities' },
    { tool: 'GNS3', desc: 'Advanced network emulation (alternative to Packet Tracer)' },
    { tool: 'React & Git', desc: 'Portfolio and version control' }
  ]

  return (
    <section id="networking" className="mt-14 rounded-3xl border border-neutral-200/80 bg-white/70 p-8 shadow-sm backdrop-blur-sm transition-colors duration-300 dark:border-neutral-800 dark:bg-neutral-900/50 sm:p-12">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Core Networking Knowledge</h2>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Cisco Packet Tracer projects showcasing practical networking concepts and theory.</p>
          </div>
        </div>

        <div className="mt-8 space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Network Fundamentals</h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {fundamentals.map((item, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-lg border border-neutral-200/70 bg-white/60 p-4 dark:border-neutral-800/70 dark:bg-neutral-900/50">
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="font-medium text-neutral-900 dark:text-white">{item.title}</motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}
                    className="mt-1 text-xs text-neutral-600 dark:text-neutral-300">{item.desc}</motion.p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Networking Devices & Equipment</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {devices.map((device, i) => (
                <figure key={i} className="group relative overflow-hidden rounded-xl border border-neutral-200/70 bg-white/60 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-neutral-800/70 dark:bg-neutral-900/50">
                  <img src={device.src} alt={device.title} className="h-40 w-full object-cover rounded-md" loading="lazy" />
                  <figcaption className="mt-3">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">{device.title}</p>
                        <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-300">{device.desc}</p>
                      </div>
                      <button
                        onClick={() => onOpenDeviceModal(device)}
                        className="ml-4 inline-flex items-center rounded-md border border-shamrock-200/70 bg-shamrock-50 px-2 py-1 text-xs font-medium text-shamrock-700 hover:bg-shamrock-100"
                        type="button"
                      >
                        View
                      </button>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4"> IP Addressing & Subnetting</h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {ipAddressing.map((item, i) => (
                <div key={i} className="rounded-lg border border-neutral-200/70 bg-white/60 p-4 dark:border-neutral-800/70 dark:bg-neutral-900/50">
                  <p className="font-medium text-neutral-900 dark:text-white">{item.title}</p>
                  <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4"> Key Protocols</h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {protocols.map((item, i) => (
                <div key={i} className="rounded-lg border border-neutral-200/70 bg-white/60 p-4 dark:border-neutral-800/70 dark:bg-neutral-900/50">
                  <p className="font-medium text-neutral-900 dark:text-white">{item.title}</p>
                  <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className=" text-lg font-semibold mb-4">Tools & Technologies</h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {tools.map((item, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-lg border border-neutral-200/70 bg-white/60 p-4 dark:border-neutral-800/70 dark:bg-neutral-900/50">
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="font-medium text-neutral-900 dark:text-white">{item.tool}</motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}
                    className="mt-1 text-xs text-neutral-600 dark:text-neutral-300">{item.desc}</motion.p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}