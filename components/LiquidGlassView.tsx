import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import type { ReactNode } from 'react';
import { StyleSheet, View, type ViewProps, type ViewStyle } from 'react-native';

type LiquidGlassViewProps = ViewProps & {
  children?: ReactNode;
  intensity?: number;
  tint?: 'light' | 'dark' | 'default';
  style?: ViewStyle;
};

export default function LiquidGlassView({
  children,
  style,
  intensity = 80,
  tint = 'light',
  ...props
}: LiquidGlassViewProps) {
  return (
    <View style={[styles.wrapper, style]} {...props}>
      <BlurView intensity={intensity} tint={tint} style={StyleSheet.absoluteFill} />
      <LinearGradient
        colors={['rgba(255,255,255,0.3)', 'rgba(255,255,255,0.08)', 'rgba(255,255,255,0.02)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
      />
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    overflow: 'hidden',
    borderRadius: 24,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255,255,255,0.35)',
    backgroundColor: 'rgba(255,255,255,0.08)',
  },
  content: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
