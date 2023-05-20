package com.codingdojo.zookeeper;

public class Gorilla extends Mammal {
	public void throwSomething() {
		System.out.print("Gorilla Throws\n");
		energyLevels = energyLevels - 5;
		super.displayEnergy();
	}

	public void eatBananas() {
		System.out.print("Gorilla Happy\n");
		energyLevels = energyLevels + 10;
		super.displayEnergy();
	}

	public void climb() {
		System.out.print("Gorilla Climb\n");
		energyLevels = energyLevels - 10;
		super.displayEnergy();
	}
}
