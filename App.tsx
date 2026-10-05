import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import LiquidGlassView from './components/LiquidGlassView';

const actions = [
  { label: 'Play', icon: '▶', wide: true, accent: true },
  { label: 'Settings', icon: '⚙', wide: false },
  { label: 'Leaderboard', icon: '🏆', wide: false },
  { label: 'More', icon: '⋯', wide: false },
  { label: 'Login', icon: '→', wide: true },
];

export default function App() {
  return (
    <LinearGradient colors={['#0d1326', '#1d214a', '#4c2d68']} style={styles.background}>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar style="light" />

        <View style={styles.decorCircleOne} />
        <View style={styles.decorCircleTwo} />

        <View style={styles.header}>
          <LiquidGlassView style={styles.logoShell} intensity={90} tint="light">
            <Text style={styles.logoText}>GTW</Text>
          </LiquidGlassView>

          <Text style={styles.title}>Guess Translate Word</Text>
        </View>

        <View style={styles.content}>
          <LiquidGlassView style={styles.heroCard} intensity={85} tint="default">
            <Text style={styles.tagline}>Translate. Guess. Win.</Text>
            <Text style={styles.heroText}>A polished game flow inspired by the original Android UI with modern glass styling.</Text>
          </LiquidGlassView>

          <View style={styles.buttonColumn}>
            <Pressable style={styles.primaryAction} accessibilityRole="button">
              <LiquidGlassView style={styles.fullWidthGlass} intensity={95} tint="light">
                <View style={styles.buttonRow}>
                  <Text style={styles.actionLabel}>{actions[0].label}</Text>
                  <Text style={styles.actionIcon}>{actions[0].icon}</Text>
                </View>
              </LiquidGlassView>
            </Pressable>

            <View style={styles.secondaryRow}>
              {actions.slice(1, 4).map((action) => (
                <Pressable key={action.label} style={styles.secondaryAction} accessibilityRole="button">
                  <LiquidGlassView style={styles.smallGlass} intensity={85} tint="default">
                    <Text style={styles.actionIcon}>{action.icon}</Text>
                  </LiquidGlassView>
                </Pressable>
              ))}
            </View>

            <Pressable style={styles.secondaryLogin} accessibilityRole="button">
              <LiquidGlassView style={styles.fullWidthGlass} intensity={90} tint="light">
                <View style={styles.buttonRow}>
                  <Text style={styles.actionLabel}>{actions[4].label}</Text>
                  <Text style={styles.actionIcon}>{actions[4].icon}</Text>
                </View>
              </LiquidGlassView>
            </Pressable>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Powered by</Text>
          <View style={styles.footerBadge}>
            <Text style={styles.footerBadgeText}>AY</Text>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    position: 'relative',
  },
  decorCircleOne: {
    position: 'absolute',
    top: -80,
    right: -40,
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: 'rgba(118, 138, 255, 0.18)',
  },
  decorCircleTwo: {
    position: 'absolute',
    bottom: 90,
    left: -60,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(255, 192, 203, 0.12)',
  },
  header: {
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 14,
  },
  logoShell: {
    width: 80,
    height: 80,
    borderRadius: 24,
    backgroundColor: 'rgba(255,255,255,0.12)',
  },
  logoText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: 1,
  },
  title: {
    marginTop: 14,
    color: '#eff3ff',
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  heroCard: {
    width: '100%',
    minHeight: 120,
    borderRadius: 28,
    padding: 22,
    marginBottom: 28,
  },
  tagline: {
    color: '#f9fbff',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  heroText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
  },
  buttonColumn: {
    alignItems: 'center',
    gap: 18,
  },
  primaryAction: {
    width: '100%',
  },
  secondaryAction: {
    flex: 1,
    maxWidth: 110,
  },
  secondaryLogin: {
    width: '72%',
  },
  fullWidthGlass: {
    width: '100%',
    height: 58,
    borderRadius: 18,
  },
  smallGlass: {
    width: '100%',
    height: 58,
    borderRadius: 18,
  },
  secondaryRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    width: '100%',
    height: '100%',
  },
  actionLabel: {
    color: '#fff',
    fontSize: 19,
    fontWeight: '600',
  },
  actionIcon: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 26,
    gap: 8,
  },
  footerText: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: 14,
  },
  footerBadge: {
    width: 28,
    height: 28,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.14)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.35)',
  },
  footerBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '800',
  },
});
