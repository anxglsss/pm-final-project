'use client';

import { motion, type HTMLMotionProps } from 'motion/react';

import { Slot, type WithAsChild } from '@/components/animate-ui/primitives/animate/slot';

type ButtonProps = (
  | (HTMLMotionProps<'button'> & {
      hoverScale?: number;
      tapScale?: number;
      asChild?: false;
    })
  | (WithAsChild<
      HTMLMotionProps<'button'> & {
        hoverScale?: number;
        tapScale?: number;
      }
    > & { asChild: true })
);

function Button({
  hoverScale = 1.05,
  tapScale = 0.95,
  asChild = false,
  ...props
}: ButtonProps) {
  if (asChild) {
    return (
      <Slot
        whileTap={{ scale: tapScale }}
        whileHover={{ scale: hoverScale }}
        {...(props as WithAsChild<HTMLMotionProps<'button'>> & { asChild: true })}
      />
    );
  }

  return (
    <motion.button
      whileTap={{ scale: tapScale }}
      whileHover={{ scale: hoverScale }}
      {...(props as HTMLMotionProps<'button'>)}
    />
  );
}

export { Button, type ButtonProps };
