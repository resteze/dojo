package com.codingdojo.zookeeper;

public class Bat extends Mammal {

	public void fly() {
		System.out.print("WHOOOSH\n");
		super.energyLevels = super.energyLevels - 50;
		super.displayEnergy();
	}

	public void eatHumans() {
		System.out.print("AAAAAAAAAAAAAAAAAAAAAAAAAA\n");
		super.energyLevels = super.energyLevels + 25;
		super.displayEnergy();
	}

	public void attackTown() {
		System.out.print("OMG THE MASSACRE\n");
		super.energyLevels = super.energyLevels - 100;
		super.displayEnergy();
	}
}
