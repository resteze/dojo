package com.codingdojo.zookeeper;

public class Mammal {
	protected int energyLevels = 0;

	public int displayEnergy() {
		System.out.printf("Energy Levels: %d \n", energyLevels);
		return energyLevels;
	}
	public void setEnergyLevels(int x) {
		energyLevels = x;
	}
}
